export default {
  // These are app level configs.
  lang: "fr",
  title: "jmx.blue",
  description: "Quelques mots",
  themeConfig: {
    logo: "https://en.unesco.org/sites/default/files/open-book.png",
    nav: [
      {
        text: "Poèmes",
        items: [
          { text: "Bourrasque", link: "/bourrasque" },
          { text: "Je pleure des oreilles", link: "/crying" },
        ],
      },
      {
        text: "Textes",
        items: [{ text: "Donner et demander", link: "/giveAndAsk" }],
      },
      { text: "Code", link: "https://www.jmax.dev/" },
      { text: "Art", link: "https://www.jmxi.art/" },
    ],
  },
};
