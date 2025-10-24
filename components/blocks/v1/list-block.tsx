import type { ListBlock } from "@/@types/analysis-blocks";
import { cn } from "@/lib/utils";

type Props = ListBlock;

export default function ListBlock({ ordered, items }: Props) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag
      className={cn(
        "text-muted-foreground mb-4 space-y-2 pl-6",
        ordered ? "list-decimal" : "list-disc"
      )}
    >
      {items.map((item, idx) => (
        <li key={idx} className="leading-7">
          {item}
        </li>
      ))}
    </Tag>
  );
}
