import type { MetricCardBlock } from "@/@types/analysis-blocks";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = MetricCardBlock;

export default function MetricCardBlock({ title, value, change, trend, description }: Props) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-sm font-medium">{title}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold">{value}</p>
          {change && (
            <div className={cn("flex items-center gap-1 text-sm font-medium", getTrendColor())}>
              {getTrendIcon()}
              <span>{change}</span>
            </div>
          )}
        </div>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
    </Card>
  );
}
