export interface Experience {
  from: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  currently?: boolean;
}

export const experiencesIt: Experience[] = [
  {
    from: "06/20/2022",
    title: "Software Engineer",
    color: "orange",
    icon: "mdi:briefcase",
    currently: true,
    description: "Software Engineer presso PagoPA s.p.a.\nWork on the design and development of microservice architectures."
  },
  {
    from: "05/13/2021",
    title: "Android and Flutter developer",
    color: "orange",
    icon: "mdi:briefcase",
    description: "Sviluppatore Android (Java/Kotlin) e Flutter presso Sysdata s.p.a."
  },
  {
    from: "03/01/2021",
    title: "Laura magistrale",
    description: "Laurea magistrale in Ingegneria e Scienze Informatiche presso Università di Bologna. \\\\ 110/110 e lode.",
    color: "orange",
    icon: "mdi:account-school"
  },
  {
    from: "10/01/2018",
    title: "Laura triennale",
    description: "Laurea in Informatica applicata presso Università degli Studi di Urbino Carlo Bo. \\\\ 108/110.",
    color: "orange",
    icon: "mdi:account-school"
  },
  {
    from: "03/01/2018",
    title: "Full Stack Developer",
    description: "Sviluppatore full stack per dispositivi embedded legati all'industria 4.0 presso GreenDreams (startup).",
    color: "orange",
    icon: "mdi:briefcase"
  },
  {
    from: "06/01/2015",
    title: "Diploma",
    description: "Diploma in Informatica presso ITIS E.Mattei Urbino. \\\\ 86/110.",
    color: "orange",
    icon: "mdi:account-school"
  }
];

export const experiencesEn: Experience[] = [
  {
    from: "06/20/2022",
    title: "Software Engineer",
    color: "orange",
    icon: "mdi:briefcase",
    currently: true,
    description: "Software Engineer presso PagoPA s.p.a.\nWork on the design and development of microservice architectures."
  },
  {
    from: "05/13/2021",
    title: "Android and Flutter developer",
    color: "orange",
    icon: "mdi:briefcase",
    description: "Android (Java/Kotlin) and Flutter developer on Sysdata s.p.a. I have experience in both native and hybrid development with Flutter.\nThe main technologies and languages I use are Kotlin with the new Compose framework and Flutter in mobile."
  },
  {
    from: "03/01/2021",
    title: "Master's Degree in Computer Science and Software Engineering",
    description: "Bologna University (Cesena) \\ 110/110 with honors",
    color: "orange",
    icon: "mdi:account-school"
  },
  {
    from: "10/01/2018",
    title: "Bachelor's Degree in Computer Science",
    description: "Urbino University \\\\ 108/110.",
    color: "orange",
    icon: "mdi:account-school"
  },
  {
    from: "03/01/2018",
    title: "Full Stack Developer",
    description: "Sviluppatore full stack per dispositivi embedded legati all'industria 4.0 presso GreenDreams (startup).",
    color: "orange",
    icon: "mdi:briefcase"
  },
  {
    from: "06/01/2015",
    title: "Graduation in Computer Science",
    description: "ITIS E. Mattei Urbino \\\\ 86/110.",
    color: "orange",
    icon: "mdi:account-school"
  }
];
