import SonaContent from "./SonaContent";

export const metadata = {
  title: "Sona: Sleep Transition Ritual Concept | Tooba Ameer",
  description: "Speculative design concept exploring how a ceramic ritual dock, scent compositions, and a dedicated app help users transition out of a stimulated day and into restful sleep. Designed by Tooba Ameer.",
  openGraph: {
    title: "Sona: Sleep Transition Ritual Concept | Tooba Ameer",
    description: "Speculative design concept exploring how a ceramic ritual dock, scent compositions, and a dedicated app help users transition out of a stimulated day and into restful sleep.",
    images: [
      {
        url: "/Project Images/Sona/Web banner.jpg",
        width: 1200,
        height: 630,
        alt: "Sona Ritual Dock and Compositions Bedside Evening Light",
      },
    ],
  },
};

export default function SonaCaseStudy() {
  return <SonaContent />;
}
