"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ошибка загрузки</CardTitle>
        <CardDescription>
          Не удалось загрузить административный раздел.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={reset}>Повторить</Button>
      </CardContent>
    </Card>
  );
}
