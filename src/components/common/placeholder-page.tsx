import { Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <Card className="min-h-[420px] border-dashed">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
          <Sparkles className="h-5 w-5" />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>
          Раздел подготовлен как адаптивная заглушка. Бизнес-логика, API и
          хранение данных будут добавлены на следующих этапах.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl bg-muted/50 p-6 text-sm text-muted-foreground">
          Здесь появятся фильтры, таблицы, карточки и интерактивные сценарии для
          абитуриентов после СПО.
        </div>
      </CardContent>
    </Card>
  );
}
