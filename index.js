const data = {
    name: "Hamid Syed",
    tagline: "I like to make stuff",
    pfp: "https://avatars.githubusercontent.com/u/59747708",

    aboutMe: `I'm a grade 12 IB student from Ontario, Canada with a passion for programming.
            I love creating full-stack websites that solve <span>my</span> real-world problems and help people.
            As of now, exploring more fields in computer science such as cybersecurity and embedded systems.
            I am proficient in multiple languages such as JavaScript (full-stack), Python, HTML, and CSS, Rust(learning).`,

    projects: [
        {
            title: "Note Taker",
            description: "An AI-powered note taker that transcribes meeting/class lectures into proper notes",
            image: "./images/note-taker.png",
            link: "https://note-taker.nawab-as.software",
            github: "https://github.com/Nawab-AS/note-taker",
            WIP: true
        },
        
        {
            title: "Potion Brewer",
            description: "A simple clone of little alchemy",
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
};

const pfpArt = Vue.ref('');

fetch('./pfpArt.txt')
    .then(response => response.text())
    .then(async (text) => {
        await new Promise(resolve => setTimeout(resolve, 250));
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                pfpArt.value += text[i];
            }, i/2);
        }
});


Vue.createApp({
    setup() {
        return {
            data,
            pfpArt
        }
    }
}).mount('body');