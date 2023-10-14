import Image from "next/image";
import {
  FeatureSection,
  HeroBanner,
  FeatureCollection,
  NewsLetter,
} from "@/components/index";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12">
      <HeroBanner />
      <FeatureSection />
      <FeatureCollection />
      <NewsLetter />
    </div>
  );
}
