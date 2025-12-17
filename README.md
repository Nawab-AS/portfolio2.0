# Portfolio 2.0

My new portfolio!

This is a simple template, feel free to fork and customize.


## Getting Started

To view this portfolio locally, follow these steps:

1. Clone the repository:
	```bash
	git clone https://github.com/Nawab-AS/portfolio2.0.git
	```
2. Navigate to the project directory:
	```bash
	cd ./portfolio2.0
	```
3. Serve the project using a local server (e.g., Python):
	```bash
	python -m http.server 8000
	```
	or use any other method to serve static files.

4. Open `localhost:8000` in your browser to explore the portfolio.


## Customization

You can easily adapt this portfolio for your own through the `index.js` file as follows


```javascript
const data = {
    name: "<your name>",
    tagline: "<your tagline>", // optional
    pfp: "<url to your pfp>",
    pfpArt: false, // optional

    aboutMe: `<a small paragraph about you, new lines and html allowed>`,

    projects: [ // a list of all your projects

        // repeat for every project
        {
            title: "<my project name>",
            description: "<my project description>",
            image: "<url to a screenshot of your project>",
            link: "<demo url to your project>",
            github: "<github url to your project>"
            WIP: true // optional
        },
    ],

    contact: {
        email: "<your email address>",
        github: "<your github username>"
    }
};
```


### ascii Art

The optional ascii art is customizable through the `pfpArt.txt` file simply edit its contents to change it.
