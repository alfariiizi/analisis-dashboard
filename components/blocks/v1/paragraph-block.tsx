import { ParagraphBlock } from "@/@types/analysis-blocks";

type Props = ParagraphBlock;

export default function ParagraphBlock({ content }: Props) {
  return <p className="text-muted-foreground mb-4 leading-7">{content}</p>;
}
