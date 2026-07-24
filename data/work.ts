export type WorkItem = {
  title: string;
  href: string;
  category: string;
  image?: { src: string; alt: string };
  techLogos?: { src: string; alt: string }[];
};

export const shippedWork: WorkItem[] = [
  {
    title: "EverRedi",
    href: "https://everredi.vercel.app",
    category: "Next.js, NestJS, Expo product",
    image: {
      src: "/images/everredi.svg",
      alt: "EverRedi",
    },
  },
  {
    title: "DugoutDesk",
    href: "https://www.dugoutdesk.ca/",
    category: "Tournament management platform",
    image: {
      src: "/images/dugoutdesk.svg",
      alt: "DugoutDesk",
    },
  },
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

/** Add in-progress projects here when you have a public link. */
export const workInProgress: WorkItem[] = [];
