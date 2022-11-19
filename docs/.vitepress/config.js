export default {
    // These are app level configs.
    lang: "fr",
    title: "jmx.blue",
    description: "Quelques mots",
    themeConfig: {
        lastUpdatedText: "Dernière mise à jour",
        logo: "/open-book.png",
        nav: [
            {
                text: "Poèmes",
                items: [
                    { text: "Bourrasque", link: "/poemes/bourrasque" },
                    {
                        text: "Les lys abandonnés",
                        link: "/poemes/lysAbandonnes",
                    },
                    { text: "Je pleure des oreilles", link: "/poemes/crying" },
                    { text: "Sans titre", link: "/poemes/hypnose" },
                ],
            },
            {
                text: "Textes courts",
                items: [
                    { text: "Introduction", link: "/textes/intro" },
                    {
                        text: "Test de la feuille blanche",
                        link: "/textes/feuilleBlanche",
                    },
                    { text: "Donner et demander", link: "/textes/giveAndAsk" },
                    {
                        text: "Toujours rendre grace",
                        link: "/textes/rendreGrace",
                    },
                    {
                        text: "Consécration à l'Amour de Dieu",
                        link: "/textes/consecration",
                    },
                    { text: "La comète de Halley", link: "/textes/halley" },
                    {
                        text: "Autre test de la feuille blanche",
                        link: "/textes/feuilleBlancheDeux",
                    },
                ],
            },
            {
                text: "Essais",
                items: [
                    {
                        text: "Il y a une mère qui t'aime",
                        link: "/essais/marie.md",
                    },
                    {
                        text: "La liberté dans la charité",
                        link: "/essais/liberteCharite.md",
                    },
                ],
            },
            {
                text: "Bible",
                items: [
                    {
                        text: "www.uneparole.love",
                        link: "http://www.uneparole.love/",
                    },
                    { text: "Ephésiens 3,14-19", link: "/bible/ep314" },
                ],
            },
            {
                text: "Plus",
                items: [
                    { text: "Code", link: "https://www.jmax.dev/" },
                    { text: "Art", link: "https://www.jmxi.art/" },
                    { text: "A propos", link: "/about" },
                ],
            },
        ],
        sidebar: [
            {
                text: "Textes courts",
                items: [
                    { text: "Introduction", link: "/textes/intro" },
                    {
                        text: "Test de la feuille blanche",
                        link: "/textes/feuilleBlanche",
                    },
                    { text: "Donner et demander", link: "/textes/giveAndAsk" },
                    {
                        text: "Toujours rendre grace",
                        link: "/textes/rendreGrace",
                    },
                    {
                        text: "Consécration à l'Amour de Dieu",
                        link: "/textes/consecration",
                    },
                    { text: "La comète de Halley", link: "/textes/halley" },
                    {
                        text: "Autre test de la feuille blanche",
                        link: "/textes/feuilleBlancheDeux",
                    },
                ],
            },
            {
                text: "Poèmes",
                items: [
                    { text: "Bourrasque", link: "/poemes/bourrasque" },
                    {
                        text: "Les lys abandonnés",
                        link: "/poemes/lysAbandonnes",
                    },
                    { text: "Je pleure des oreilles", link: "/poemes/crying" },
                    { text: "Sans titre", link: "/poemes/hypnose" },
                ],
            },

            {
                text: "Essais",
                items: [
                    {
                        text: "Il y a une mère qui t'aime",
                        link: "/essais/marie.md",
                    },
                    {
                        text: "La liberté dans la charité",
                        link: "/essais/liberteCharite.md",
                    },
                ],
            },
            {
                text: "Bible",
                items: [
                    {
                        text: "www.uneparole.love",
                        link: "http://www.uneparole.love/",
                    },
                    { text: "Ephésiens 3,14-19", link: "/bible/ep314" },
                ],
            },
        ],
        footer: {
            message:
                "Version 1, site en ligne depuis juillet 2022. Textes datant de 2016 à aujourd'hui.",
        },
    },
};
