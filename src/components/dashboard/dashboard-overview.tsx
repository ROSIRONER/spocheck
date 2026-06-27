import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatsGrid } from "@/components/dashboard/stats-grid";

const updates = [
  "Обновлены правила приема в демо-каталоге",
  "Добавлены шаблоны для будущего сравнения",
  "Подготовлены UI-зоны под календарь дедлайнов",
];
const deadlines = [
  "15 июля — завершение приема документов",
  "25 июля — внутренние экзамены",
  "3 августа — публикация списков",
];
export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-gradient-to-br from-muted/60 via-background to-background p-6 md:p-10">
        <Badge>Production-ready scaffold</Badge>
        <div className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            SPO Check помогает абитуриентам после СПО уверенно выбрать
            траекторию поступления.
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            На этом этапе подготовлен чистый адаптивный frontend-каркас без API,
            БД и бизнес-логики — готовый к подключению Supabase.
          </p>
        </div>
      </section>
      <StatsGrid />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Последние обновления</CardTitle>
            <CardDescription>Фиктивные события интерфейса</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {updates.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ближайшие дедлайны</CardTitle>
            <CardDescription>
              Демо-данные для будущего календаря
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {deadlines.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{item}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
