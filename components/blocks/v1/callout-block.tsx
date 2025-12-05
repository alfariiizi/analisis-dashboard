import { CalloutBlock } from "@/@types/analysis-blocks";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = CalloutBlock;

export default function CalloutBlockComponent({ variant, title, content }: Props) {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "error":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-green-500/50 bg-green-500/10 text-green-500";
      case "warning":
        return "border-yellow-500/50 bg-yellow-500/10 text-yellow-500";
      case "error":
        return "border-red-500/50 bg-red-500/10 text-red-500";
      default:
        return "border-blue-500/50 bg-blue-500/10 text-blue-500";
    }
  };

  return (
    <Alert className={cn("my-4", getVariantStyles())}>
      {getIcon()}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="text-foreground">{content}</AlertDescription>
    </Alert>
  );
}
