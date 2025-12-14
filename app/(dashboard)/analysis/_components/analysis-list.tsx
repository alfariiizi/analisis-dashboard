import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Eye, Trash, Calendar, Package, Lightbulb } from "lucide-react";
import ModuleTitle from "@/components/typography/module-title";
import { getAllBlockBasedAnalyses } from "@/@data/analysis-blocks-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const maximumAnalysis = 14;

export default function AnalysisList() {
  const data = getAllBlockBasedAnalyses();

  return (
    <div className="">
      <div className="container mx-auto flex flex-col gap-24">
        <div className="flex w-full flex-col gap-8">
          <ModuleTitle
            title="Analisis"
            description="Daftar analisis yang telah Anda buat. Lihat detail atau hapus analisis sesuai kebutuhan Anda."
            className="bg-[linear-gradient(47deg,_#0d63a5_0%,_#ca3500_59%,_#0d63a5_95%,_#d08700_100%)]"
            imageSrc={`/dashboard/data.jpg`}
            imageBlendMode="hard-light"
          />
          <Card className="flex flex-col">
            <CardHeader className="flex items-end justify-between gap-2">
              <CardTitle className="">Maksimal Analisis</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <Progress
                value={(data.length / maximumAnalysis) * 100}
                className="h-2 w-full rounded-full md:w-56"
              />
              <p>
                {data.length}/{maximumAnalysis}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <AnalisisCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              summary={item.summary}
              createdAt={item.createdAt}
              products={item.products}
              insights={item.insights}
              tags={item.tags}
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
  category,
  summary,
  createdAt,
  products,
  insights,
  tags
}: {
  id: string;
  title: string;
  category: string;
  summary: string;
  createdAt: string;
  products: number;
  insights: number;
  tags: string[];
}) {
  const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="group hover:border-primary/50 relative flex flex-col gap-4 rounded-lg border p-6 transition-all hover:shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="grid w-fit grid-cols-2 rounded-full border p-1 opacity-0 transition-opacity group-hover:opacity-100">
            <Link href={`/analysis/${id}`} className="w-full">
              <Button
                size="sm"
                variant="ghost"
                className="h-7 w-full cursor-pointer rounded-l-full px-2 text-xs"
              >
                <Eye className="h-3 w-3" />
              </Button>
            </Link>
            <Button
              size="sm"
              variant="ghost"
              className="hover:bg-destructive/30 h-7 w-full cursor-pointer rounded-r-full px-2 text-xs"
            >
              <Trash className="h-3 w-3" />
            </Button>
          </div>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-muted-foreground line-clamp-3 text-sm">{summary}</p>
      </div>

      <div className="flex flex-col gap-3 border-t pt-4">
        <div className="text-muted-foreground flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="text-muted-foreground flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <Package className="h-3.5 w-3.5" />
            <span>{products} produk</span>
          </div>
          <div className="flex items-center gap-1">
            <Lightbulb className="h-3.5 w-3.5" />
            <span>{insights} insight</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}
