import icon from "../src/assets/icon.png";

interface IConfig {
  me: {
    name: string;
    job: string;
    started: string;
    stack: string;
    hobby: string;
    projectLink: string;
  };
  socials: {
    [name: string]: string;
  };
  projects: {
    [name: string]: {
      url: string;
      tags: string[];
    };
  };
  og: {
    image: string;
  };
}

export const Config: IConfig = {
  me: {
    name: "Latreche Mohammed Taher",
    job: "software engineer",
    started: "2022-06-01",
    stack: "full stack web dev",
    hobby: "play chess",
    projectLink: "https://github.com/taher33?tab=repositories",
  },
  socials: {
    twitter: "https://twitter.com/LatrecheTaher",
    github: "https://github.com/taher33",
    "dev.to": "https://dev.to/taher33",
  },
  projects: {
    // "996.ICU": {
    //   url: "https://github.com/996icu/996.ICU",
    //   tags: ["ccp", "chinese", "overwork", "labor", "996"],
    // },
    // Linux: {
    //   url: "https://github.com/torvalds/linux",
    //   tags: ["c", "kernel", "unix", "os"],
    // },
  },
  og: {
    image: icon.src,
  },
};
