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
        items: [
          { text: "Introduction", link: "/intro" },
          { text: "Donner et demander", link: "/giveAndAsk" },
          { text: "Toujours rendre grace", link: "/rendreGrace" },
        ],
      },
      {
        text: "Bible",
        items: [{ text: "Ephésiens 3,14-19", link: "/ep314" }],
      },

      { text: "Code", link: "https://www.jmax.dev/" },
      { text: "Art", link: "https://www.jmxi.art/" },
      { text: "A propos", link: "/about" },
    ],
    sidebar: [
      {
        text: "Poèmes",
        items: [
          { text: "Bourrasque", link: "/bourrasque" },
          { text: "Je pleure des oreilles", link: "/crying" },
          { text: "Toujours rendre grace", link: "/rendreGrace" },
        ],
      },
      {
        text: "Textes",
        items: [
          { text: "Introduction", link: "/intro" },
          { text: "Donner et demander", link: "/giveAndAsk" },
        ],
      },
      {
        text: "Bible",
        items: [{ text: "Ephésiens 3,14-19", link: "/ep314" }],
      },
    ],
  },
};
