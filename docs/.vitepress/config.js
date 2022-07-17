export default {
  // These are app level configs.
  lang: "fr",
  title: "jmx.blue",
  description: "Quelques mots",
  themeConfig: {
    logo: "https://en.unesco.org/sites/default/files/open-book.png",
    nav: [
      { text: "Code", link: "https://www.jmax.dev/" },
      { text: "Art", link: "https://www.jmxi.art/" },
      {
        text: "Textes",
        items: [
          { text: "Je pleure", link: "/crying" },
          { text: "Donner et demander", link: "/giveAndAsk" },
        ],
      },
    ],
  },
};
