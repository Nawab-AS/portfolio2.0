const { createApp, ref } = Vue;

const data = ref({
    pfp: "https://avatars.githubusercontent.com/u/59747708",

    tagline: "I like to make stuff",

    projects: [
        {
            title: "Project One",
            description: "Description for project one.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn24iCR7VE2le8OTW2jZ6pZW9NNMemSyeFQ&s",
            link: "https://example.com/project-one",
            github: "https://github.com/example/project-one"
        },
        {
            title: "Project two",
            description: "Description for project two.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn24iCR7VE2le8OTW2jZ6pZW9NNMemSyeFQ&s",
            link: "https://example.com/project-two",
            github: "https://github.com/example/project-two"
        }
    ],

    contact: {
        email: "support@nawab-as.software"
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