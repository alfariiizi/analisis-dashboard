import PageContainer from "@/components/page-container";
import { getAnalysisById } from "@/@data/analysis-data";
import { notFound } from "next/navigation";
import AnalysisDetail from "./_components/analysis-detail";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function AnalysisDetailPage({ params }: Props) {
  const id = (await params).id;
  const analysis = getAnalysisById(id);

  if (!analysis) {
    notFound();
  }

  return (
    <PageContainer className="mx-auto mb-0 flex max-w-5xl flex-col gap-2">
      <AnalysisDetail analysis={analysis} />
    </PageContainer>
  );
}
