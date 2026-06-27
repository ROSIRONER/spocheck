import { Building2, Clock, GraduationCap, TestTube2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stats = [
  { label: "Университетов", value: "128", icon: Building2 },
  { label: "Программ", value: "1 842", icon: GraduationCap },
  { label: "Экзаменов", value: "312", icon: TestTube2 },
  { label: "Последнее обновление", value: "Сегодня", icon: Clock },
];

const changes = [
  { entity: "МГТУ им. Баумана", type: "Университет", status: "Подготовлено" },
  { entity: "09.03.01 Информатика", type: "Программа", status: "Черновик" },
  { entity: "Математика", type: "Экзамен", status: "Ожидает CRUD" },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-background p-6 shadow-sm md:p-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Панель администратора
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Защищенная зона готова к будущей реализации CRUD. Сейчас отображаются
          фиктивные данные и UI-состояния.
        </p>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
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
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.6fr]">
        <Card>
          <CardHeader>
            <CardTitle>Последние изменения</CardTitle>
            <CardDescription>
              Демо-таблица для будущих административных операций
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Тип</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {changes.map((change) => (
                  <TableRow key={change.entity}>
                    <TableCell className="font-medium">
                      {change.entity}
                    </TableCell>
                    <TableCell>{change.type}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {change.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Loading preview</CardTitle>
            <CardDescription>
              Skeleton-состояние для будущих данных
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
