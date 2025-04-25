"use client";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import FlowChart from "@/components/FlowChart";
import FlowImage from "@/components/FlowImage";
import Footer from "@/components/Footer";
import ThreeDMarqueeDemoSecond from "@/components/ThreeDMarqueeDemoSecond";

export default function Home() {
  return (
    <div>
      <ThreeDMarqueeDemoSecond />
      <AuroraBackgroundDemo />
      <FlowImage />
      <FlowChart/>
      <Footer />
      
    </div>
  );
}
