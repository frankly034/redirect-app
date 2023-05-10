# React Redirect

This is a React app, bootstrapped using Vite. It is part of a tutorial series: `Elegant react router redirect with URL redirection defense` ([See playlist](https://www.youtube.com/playlist?list=PLseH49SWn6valoxB6CpKp9wJle1RqKFlD)) to illustrate how to design and implement an elegant and low maintenance react redirection using the higher order component (HOC) and provider pattern.

## Table of Contents

- [App Features](#app-features)
- [Concepts Employed](#concepts-employed)
- [Built with](#built-with)
- [Mock Designs](#mock-designs)
- [Required Installations](#required-installations)
- [Installation](#installation)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- Movie features -->

## App Features

- A simple react application set up with vite and react router dom with a simple layout.
- Implementing redirection with a higher order component.
- Passing authentication state to child compnents using provider pattern (react context).
- Memorize and redirect users to intending page after login. Like in the case of a link shared via email to a specific path requiring login.

<!-- concepts and apis employed -->

## Concepts Employed

- This app demonstrates the use of React concepts like:
  - Routing and templating with [react route dom v6](https://www.npmjs.com/package/react-router-dom)
  - App redirection with higher order component (HOC) and provider patterns.
  - Custom hooks
  - React contexts
  - Higher order component (HOC)

<!-- BUILT wITH -->

## Built with

- HTML5
- CSS3
- JavaScript
- React (Scaffolded with [vite](https://vitejs.dev/))

<!-- MOCK DESIGNS -->

## Mock Designs

See mock design guides for the app below;

- Email available at `http://localhost:8000/email.html` with CTA button directed to `/account`, however login is required to access this route. After login, user is redirected to `/account`, as earlier intended instead of the default `/dashboard`.
  <img width="1440" alt="Screenshot 2023-05-08 at 00 18 53" src="https://user-images.githubusercontent.com/31358867/236707462-33487413-b90e-4748-93be-512a87cad324.png">

- Login page.
  <img width="1440" alt="Screenshot 2023-05-08 at 00 19 37" src="https://user-images.githubusercontent.com/31358867/236707481-8cff98ee-e622-4dfe-be57-2709e961df64.png">

- Dashboard, account and not found pages.
  <img width="1440" alt="Screenshot 2023-05-08 at 00 20 22" src="https://user-images.githubusercontent.com/31358867/236707503-debb4c6f-f67d-433a-a6a3-5cd6bd2df85e.png">
  <img width="1440" alt="Screenshot 2023-05-08 at 00 20 48" src="https://user-images.githubusercontent.com/31358867/236707516-91e1c324-628c-4da1-a3b4-360e56b6e40c.png">

<!-- REQUIRED INSTALLATION -->

## Required Installations

- Node/NPM

<!-- INSTALLATION -->

## Installation

Once you have installed the required packages, proceed with the following steps

Clone the Repository

```Shell
your@pc:~$ git clone git@github.com:frankly034/redirect-app.git
```

Move to the downloaded folder

```Shell
your@pc:~$ cd redirect-app
```

Install all packages

```Shell
your@pc:~$ npm install
```

Open the app

```Shell
your@pc:~$ npm run dev
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

- 🇳🇬 Lewis Ugege - franklynugege@gmail.com | [Github Account](https://github.com/frankly034) | [Twitter](https://twitter.com/@wizlulu) | [Linkedin](https://linkedin.com/in/lewis-ugege) | [Youtube](https://www.youtube.com/@sprintfeature)

## Acknowledgements

- [URL REDIRECTION – ATTACK AND DEFENSE](https://www.virtuesecurity.com/kb/url-redirection-attack-and-defense/) and God Almighty.
