import dynamic from "next/dynamic";
import { DownloadSection } from "@/components/DownloadSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

const VideoDemo = dynamic(
  () => import("@/components/VideoDemo").then((mod) => mod.VideoDemo),
  { ssr: false }
);

export default function HomePage() {
  return (
    <main className="w-full overflow-x-clip">
      <h2 className="sr-only">Free Subtitle Generator — FreeSubtitler</h2>
      <Hero />
      <VideoDemo />
      <DownloadSection />
      <FAQ />
      <Footer />
    </main>
  );
}
