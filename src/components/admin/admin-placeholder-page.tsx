import { Inbox } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function AdminPlaceholderPage({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Раздел админ-панели подготовлен для будущего CRUD без реализации
            бизнес-логики.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex min-h-56 flex-col items-center justify-center rounded-xl border border-dashed bg-muted/30 p-8 text-center">
            <Inbox className="mb-3 h-8 w-8 text-muted-foreground" />
            <p className="font-medium">Empty State</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Данные появятся после подключения сервисов и CRUD-сценариев.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Loading</CardTitle>
          <CardDescription>Skeleton для будущих таблиц</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-2/3" />
        </CardContent>
      </Card>
    </div>
  );
}
