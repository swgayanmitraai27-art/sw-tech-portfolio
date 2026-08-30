import { niches } from '@/data/niches';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return Object.keys(niches).map((niche) => ({ niche }));
}

export default async function NicheLayout(props: {
  children: React.ReactNode;
  params: Promise<{ niche: string }>;
}) {
  const { niche } = await props.params;
  const nicheData = niches[niche];
  
  if (!nicheData) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-slate-800 selection:text-white">
      {props.children}
    </div>
  );
}
