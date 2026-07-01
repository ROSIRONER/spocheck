import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/types/database";
import { getSupabaseEnv, hasSupabaseEnv } from "@/lib/supabase/env";

const loginPath = "/login";
const adminPathPrefix = "/admin";

export async function updateSupabaseSession(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith(adminPathPrefix);

  if (!hasSupabaseEnv()) {
    if (isAdminRoute) {
      return NextResponse.redirect(new URL(loginPath, request.url));
    }

    return NextResponse.next({ request });
  }

  const env = getSupabaseEnv();
  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response = NextResponse.next({ request });
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (isAdminRoute && !user) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  if (request.nextUrl.pathname === loginPath && user) {
    return NextResponse.redirect(new URL(adminPathPrefix, request.url));
  }

  return response;
}
