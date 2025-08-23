import studies from "@/data/studies.json";
import StudyCard from "@/components/StudyCard";

export default function Studies() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Studies</h1>
      <div className="grid gap-4">
        {(studies as any[]).map((s: any) => (
          <StudyCard key={s.slug} study={s} />
        ))}
      </div>
    </div>
  );
}

