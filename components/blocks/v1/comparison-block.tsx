import { ComparisonBlock } from "@/@types/analysis-blocks";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = ComparisonBlock;

export default function ComparisonBlockComponent({ title, items }: Props) {
  return (
    <div className="my-6">
      {title && <h4 className="mb-4 text-base font-semibold">{title}</h4>}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, idx) => (
          <Card key={idx} className="p-6">
            <div className="mb-4 flex items-center gap-2">
              {item.color && (
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              )}
              <h5 className="font-semibold">{item.category}</h5>
            </div>
            <dl className="space-y-3">
              {Object.entries(item.metrics).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-1">
                  <dt className="text-muted-foreground text-xs font-medium">{key}</dt>
                  <dd className="text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        ))}
      </div>
    </div>
  );
}
