export function generateStaticParams(){ return [{ slug: 'example' }]; }
export default function Study({ params }: { params:{slug:string} }){
  return <main className="p-8"><h1>Study: {params.slug}</h1></main>;
}
