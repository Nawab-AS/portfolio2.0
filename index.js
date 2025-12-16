const { createApp, ref } = Vue;

const data = ref({
    pfp: "https://avatars.githubusercontent.com/u/59747708",

    tagline: "I like to make stuff",

    projects: [
        {
            title: "Note Taker",
            description: "An AI-powered note taker that transcribes meeting/class lectures into proper notes",
            image: "./images/note-taker.png",
            link: "https://note-taker.nawab-as.software",
            github: "https://github.com/Nawab-AS/note-taker"
        },
        {
            title: "Potion Brewer",
            description: "Description for project two.",
            image: "./images/potion-brewer.png",
            link: "https://nawab-as.github.io/potion-brewer",
            github: "https://github.com/Nawab-AS/potion-brewer",
        },
        {
            title: "Anonymous Chat",
            description: "An anonymous chat app where all messages are encrypted across clients using my own implementation of the ECC key exchange",
            image: "./images/anonymous-chat.png",
            link: "https://seige-anonymous-chat-9a876f0fd2ae.herokuapp.com",
            github: "https://github.com/Nawab-AS/anonymousChat",
        },
        {
            title: "Analog to Digital",
            description: "Create a digital clock from an analog one",
            image: "./images/analog-to-digital.png",
            link: "https://nawab-as.software/analogToDigital",
            github: "https://github.com/Nawab-AS/analogToDigital",
        },
        {
            title: "Mini-Motoyways",
            description: "A simple clone of Mini Motorways",
            image: "./images/mini-motorways.png",
            link: "http://nawab-as.software/mini-motorways",
            github: "https://github.com/Nawab-AS/mini-motorways",
        },
        {
            title: "Game-OS",
            description: "A simple clone of Mini Motorways",
            image: "./images/game-os.png",
            link: "http://nawab-as.software/game-os",
            github: "https://github.com/Nawab-AS/game-os",
        }
    ],

    contact: {
        email: "support@nawab-as.software",
        github: "Nawab-AS"
    }
});

const pfpArt = ref('');

fetch('./pfpArt.txt')
    .then(response => response.text())
    .then(async (text) => {
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                pfpArt.value += text[i];
            }, i);
        }
    });


createApp({
    setup() {
        return {
            data,
            pfpArt
        }
    }
}).mount('body');