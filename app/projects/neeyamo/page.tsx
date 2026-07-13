import type { Metadata } from "next";
import NeeyamoCaseStudy from "./NeeyamoCaseStudy";

export const metadata: Metadata = {
  title: "Neeyamo | Design Portfolio",
  description:
    "Brand, reimagined through UX. A trend-led redesign of Neeyamo's B2B HR and payroll website, from a week-long discovery workshop to final UI.",
};

export default function NeeyamoPage() {
  return <NeeyamoCaseStudy />;
}
