export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  github?: string;
  tags: string[];
}

export const projectsIt: Project[] = [
  {
    title: "Home Assistant Tapo Integration",
    description: "Integrazione per l'hub domestico home assistant per controllare i dispositivi della gamma Tapo di Tp-Link. L'integrazione è sviluppata in Python ed è basata su una libreria da me realizzata per controllare i dispositivi Tapo. Molte persone ad oggi usano questa integrazione per controllare i dispositivi raggiungengo 600+ star su github e varie donazioni di supporto.",
    thumbnail: "/img/tapo-integration/thunmbnail.png",
    github: "https://github.com/petretiandrea/home-assistant-tapo-p100",
    tags: ["home assistant", "tapo", "tplink", "python", "iot"]
  },
  {
    title: "Beaesthetic Agenda",
    description: "Applicazione e backend per la gestione di appuntamenti di un centro estetico. Il sistema permette di gestire clienti, appuntamenti e carte fedeltà. Inoltre è in grado di inviare notifiche via Sms, Whatsapp e in futuro push notification ai clienti per ricordare un appuntamento.",
    thumbnail: "/img/beaesthetic/thumbnail.png",
    tags: ["microservices", "domain driven design", "typescript", "node"]
  },
  {
    title: "Intelliserra",
    description: "Framework per la gestione di serre intelligenti sviluppato in Scala. Il framwork consente di definire serre intelligenti attraverso sensori/attuatori e di poter definire regole di automazione basate su eventi. Le tecnologie utilizzate sono prevalentemente Scala, Akka e Prolog. Sviluppato in collaborazione con Marta Luffarelli e Simone Letizi e Ylenia Battistini.",
    thumbnail: "/img/intelliserra/intelliserra.png",
    github: "https://github.com/sletizi/IntelliSerra",
    tags: ["scala", "functional", "iot"]
  },
  {
    title: "Scanbage",
    description: "Una potente web app per riconoscere i tipi di spazzatura tramite foto o codice a barre tramite rete convuluzionale (CNN Machine Learning). Si tratta di una sorta di social basati su premi sbloccati attraverso la corretta differenziazione dei rifiuti. Il progetto è stato realizzato in contesto universitario con Gianluca Aguzzi, Marta Luffarelli e Simone Letizi.",
    thumbnail: "/img/scanbage/thubnail.png",
    tags: ["machine learning", "cnn", "tensorflow", "python"]
  },
  {
    title: "Fluvium",
    description: "Un sistema full stack per il monitoraggio del livello di innalzamento dei fiumi. Il sistema è stato sviluppato partendo da componenti embedded (ESP32) fino al livello web/cloud basato su AWS. Il progetto è realizzato in contesto universitario con Gianluca Aguzzi.",
    thumbnail: "/img/fluvium/thubnail.png",
    github: "https://github.com/sbricco-house/fluvium",
    tags: ["aws", "iot", "embedded", "cloud"]
  },
  {
    title: "Subspedia",
    description: "Applicazione Android sviluppata per <a target=_blank href=https://www.subspedia.tv/> subspedia.tv</a>. Permette la gestione delle loro serie TV preferite e il download dei sottotitoli prodotti dalla comunità Subpsedia.",
    thumbnail: "/img/subspedia/thubnail.png",
    tags: ["android", "tv series", "java"]
  }
];

export const projectsEn: Project[] = [
  {
    title: "Home Assistant Tapo Integration",
    description: "With 700+ starts, tapo p100 is an integration for controlling smart plugs and smart lights of the <a target='_blank' href='https://www.tapo.com/en/'>Tapo</a> line through the well-known home automation assistant <a target='_blank' href='https://www.home-assistant.io/'>Home Assistant</a>. Made mainly in Python, this is the main integration used in the Home Assistant community.",
    thumbnail: "/img/tapo-integration/thunmbnail.png",
    github: "https://github.com/petretiandrea/home-assistant-tapo-p100",
    tags: ["home assistant", "tapo", "tplink", "python", "iot"]
  },
  {
    title: "Beaesthetic Agenda",
    description: "Application and backend for appointment management of a beauty center. The system allows to manage clients, appointments and loyalty cards. It is also able to send notifications via Sms, Whatsapp and in the future push notification to customers to remind them of an appointment.",
    thumbnail: "/img/beaesthetic/thumbnail.png",
    tags: ["microservices", "domain driven design", "typescript", "node"]
  },
  {
    title: "Intelliserra",
    description: "Framework developed in Scala which allows managing smart greenhouse. It allows defining smart greenhouse through sensors and actuators and supports an event-based actuation rules system. The main technologies used in this project are Scala, Akka and Prolog, and it developed with Marta Luffarelli, Simone Letizi and Ylenia Battistini.",
    thumbnail: "/img/intelliserra/intelliserra.png",
    github: "https://github.com/sletizi/IntelliSerra",
    tags: ["scala", "functional", "iot"]
  },
  {
    title: "Scanbage",
    description: "A powerful web app to recognize types of garbage by photo or barcode through convolutional network (CNN Machine Learning). It is a kind of social based on rewards unlocked through the correct differentiation of garbage. The project has been realized in a university context with Gianluca Aguzzi, Marta Luffarelli and Simone Letizi.",
    thumbnail: "/img/scanbage/thubnail.png",
    tags: ["machine learning", "cnn", "tensorflow", "python"]
  },
  {
    title: "Fluvium",
    description: "A full stack system for monitoring river rise levels. The system has been developed starting from embedded components (ESP32) up to the web/cloud layer based on AWS. The project is realized in university context with Gianluca Aguzzi.",
    thumbnail: "/img/fluvium/thubnail.png",
    github: "https://github.com/sbricco-house/fluvium",
    tags: ["aws", "iot", "embedded", "cloud"]
  },
  {
    title: "Subspedia",
    description: "Mobile application for the subtitling website Subspedia <a target=_blank href=https://www.subspedia.tv/> subspedia.tv</a>. (now discontinued)",
    thumbnail: "/img/subspedia/thubnail.png",
    tags: ["android", "tv series", "java"]
  }
];
