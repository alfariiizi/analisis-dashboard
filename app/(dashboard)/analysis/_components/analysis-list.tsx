import { Progress } from "@/components/ui/progress";
import { data } from "./mock-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, Trash } from "lucide-react";
import ModuleTitle from "@/components/typography/module-title";

const maximumAnalysis = 14;

export default function AnalysisList() {
  return (
    <div className="">
      <div className="container mx-auto flex flex-col gap-24">
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <ModuleTitle
            title="Analisis"
            description="Daftar analisis yang telah Anda buat. Lihat detail atau hapus analisis sesuai kebutuhan Anda."
          />
          <div className="flex flex-col">
            <div className="flex items-end justify-between gap-2">
              <p className="text-sm">Maksimal Analisis</p>
            </div>
            <div className="flex items-center gap-2">
              <Progress
                value={(data.length / maximumAnalysis) * 100}
                className="h-2 w-full rounded-full md:w-56"
              />
              <p>
                {data.length}/{maximumAnalysis}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <AnalisisCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalisisCard({
  id,
  title,
  description
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex flex-col gap-1">
      <div className="-top-11 grid w-fit grid-cols-2 rounded-full border p-1 duration-150 md:absolute md:opacity-0 md:group-hover:opacity-100">
        <Link href={`/analysis/${id}`} className="w-full">
          <Button
            size="sm"
            variant="ghost"
            className="w-full cursor-pointer rounded-l-full py-0 text-xs"
          >
            <Eye className="h-4 w-4" />
            Lihat
          </Button>
        </Link>
        <Button
          size="sm"
          variant="ghost"
          className="hover:bg-destructive/30 w-full cursor-pointer rounded-r-full text-xs"
        >
          <Trash className="h-4 w-4" />
          Hapus
        </Button>
      </div>
      <h3 className="text-base tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
