import type { HeadingBlock } from "@/@types/analysis-blocks";
import { cn } from "@/lib/utils";

type Props = HeadingBlock;

export default function HeadingBlock({ level, content }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const styles = {
    2: "text-2xl font-bold tracking-tight mt-8 mb-4",
    3: "text-xl font-semibold tracking-tight mt-6 mb-3",
    4: "text-lg font-semibold mt-4 mb-2",
    5: "text-base font-semibold mt-3 mb-2",
    6: "text-sm font-semibold mt-2 mb-1"
  };

  return <Tag className={cn(styles[level])}>{content}</Tag>;
}
