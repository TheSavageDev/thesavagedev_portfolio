export type WorkItem = {
  title: string;
  href: string;
  category: string;
  image?: { src: string; alt: string };
  techLogos?: { src: string; alt: string }[];
};

export const shippedWork: WorkItem[] = [
  {
    title: "Ascension Knights of Columbus",
    href: "https://www.ascensionkofc.com/",
    category: "WordPress website",
    image: {
      src: "/images/kofc.png",
      alt: "Ascension Knights of Columbus",
    },
  },
  {
    title: "OrthoAthletic Education",
    href: "https://www.orthoathleticedu.com/",
    category: "WordPress website",
    image: {
      src: "/images/orthoathletic.png",
      alt: "OrthoAthletic Education, LLC",
    },
  },
  {
    title: "RND Garage",
    href: "https://rndkc.vercel.app",
    category: "Next.js website",
    image: {
      src: "/images/rnd.svg",
      alt: "RND Garage",
    },
  },
  {
    title: "AHG Troop KS-3130",
    href: "https://www.ks3130.com",
    category: "Next.js website",
    image: {
      src: "/images/ahg.jpg",
      alt: "American Heritage Girls Troop KS-3130",
    },
  },
];

export const workInProgress: WorkItem[] = [
  {
    title: "Savage Supply",
    href: "https://github.com/TheSavageDev/savage-supply",
    category: "React Native, Next.js, NestJS",
    techLogos: [
      { src: "/images/react-native.svg", alt: "React Native" },
      { src: "/images/next.svg", alt: "Next.js" },
      { src: "/images/nestjs.svg", alt: "NestJS" },
    ],
  },
  {
    title: "Savage Sport",
    href: "https://github.com/TheSavageDev/savage-sport",
    category: "React Native, Next.js, NestJS",
    techLogos: [
      { src: "/images/react-native.svg", alt: "React Native" },
      { src: "/images/next.svg", alt: "Next.js" },
      { src: "/images/nestjs.svg", alt: "NestJS" },
    ],
  },
];
