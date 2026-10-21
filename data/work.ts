export type WorkItem = {
  title: string;
  href: string;
  category: string;
  image?: { src: string; alt: string };
  techLogos?: { src: string; alt: string }[];
};

export const shippedWork: WorkItem[] = [
  {
    title: "DugoutDesk",
    href: "https://dugoutdesk.app",
    category: "Youth baseball stats app",
    image: {
      src: "/images/dugoutdesk.svg",
      alt: "DugoutDesk",
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
];

/** Add in-progress projects here when you have a public link. */
export const workInProgress: WorkItem[] = [];
