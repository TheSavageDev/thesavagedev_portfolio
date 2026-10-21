export type ExperienceRole = {
  org: string;
  dates: string;
  title: string;
  points: readonly string[];
};

export const experience: readonly ExperienceRole[] = [
  {
    org: "Segistics, LLC",
    dates: "2022–Present",
    title: "Staff engineer, team lead",
    points: [
      "Designed Gavel, the company's real-time auction platform, as an Expo mobile app, a NestJS API, and a Next.js admin interface on Google Cloud and Firebase.",
      "Built the Cloud Build release pipeline, the Terraform that stands up each client environment, and the Stripe flow for accounts, mobile payments, and receipts.",
      "Manage a team of four to five engineers.",
    ],
  },
  {
    org: "C2FO",
    dates: "2021–2022",
    title: "Software engineer II",
    points: [
      "Shipped product interface work in TypeScript, React, MUI, and XState, and maintained legacy services in Kotlin, Java, and Node.js.",
      "Took a weekly on-call rotation and troubleshot production issues outside that rotation.",
    ],
  },
  {
    org: "Cerner",
    dates: "2018–2021",
    title: "Software engineer",
    points: [
      "Software engineer from 2019 to 2021, after a technical apprenticeship from 2018 to 2019.",
      "Built product features in React, HTML, CSS, and Node.js with the team.",
    ],
  },
];
