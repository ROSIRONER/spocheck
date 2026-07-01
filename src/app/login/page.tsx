import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-semibold text-primary-foreground">
            S
          </div>
          <h1 className="text-3xl font-semibold tracking-tight">
            SPO Check Admin
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Защищенный вход для администраторов проекта.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
