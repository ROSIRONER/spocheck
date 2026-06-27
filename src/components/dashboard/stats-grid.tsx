import {
  Activity,
  Building2,
  CalendarClock,
  GraduationCap,
  TestTube2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const stats = [
  {
    label: "Университетов",
    value: "128",
    icon: Building2,
    trend: "+12 за неделю",
  },
  {
    label: "Программ",
    value: "1 842",
    icon: GraduationCap,
    trend: "по 46 регионам",
  },
  {
    label: "Экзаменов",
    value: "312",
    icon: TestTube2,
    trend: "демо-расписание",
  },
  {
    label: "Дедлайнов",
    value: "24",
    icon: CalendarClock,
    trend: "в ближайший месяц",
  },
];
export function StatsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.label}
          className="bg-gradient-to-br from-card to-muted/30"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.label}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold tracking-tight">
              {stat.value}
            </div>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <Activity className="h-3 w-3" />
              {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
