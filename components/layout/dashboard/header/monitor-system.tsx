import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Activity } from "@/components/animate-ui/icons/activity";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function MonitorSystemPanel() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <AnimateIcon animateOnHover asChild>
          <Button size="sm" variant="ghost" className="relative">
            <Activity className="h-5 w-5" />
          </Button>
        </AnimateIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-999 mx-4 w-[calc(100vw-50px)] p-2 lg:w-[400px]">
        <DropdownMenuLabel>
          <div className="border-default-100 flex justify-between border-b py-3">
            <p className="text-default-800 text-sm font-medium">Sistem Monitor</p>
          </div>
        </DropdownMenuLabel>
        <div className="flex h-fit flex-col gap-5 px-2 pt-6 pb-3">
          <div className="flex flex-col text-left text-sm leading-tight">
            <span className="text-muted-foreground truncate text-xs">Total Analisis</span>
            <div className="flex items-center gap-1">
              <Progress value={70} className="h-2 w-full rounded-full" />
              <p>
                <span className="font-medium">12/20</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col text-left text-sm leading-tight">
            <div className="flex items-center justify-between gap-3">
              <span className="text-muted-foreground truncate text-xs">Sesi Aktif</span>
              <span className="text-muted-foreground/60 truncate text-xs">
                Pembatasan per-5 Jam
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Progress value={70} className="h-2 w-full rounded-full" />
              <p>
                <span className="font-medium">70%</span>
              </p>
            </div>
          </div>
          <Alert>
            <AlertTitle>
              <p>
                Reset sesi dilakukan pada pukul{" "}
                {new Date().toLocaleTimeString("id-ID").replaceAll(".", ":")}
              </p>
            </AlertTitle>
          </Alert>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
