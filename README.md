<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Commits][commits-shield]][commits-url]
[![Issues][issues-shield]][issues-url]
[![Package Version][version-shield]][version-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Dynamic React Components</h3>

  <p align="center">
    An awesome library with thousands of customizations for React components 
    <br />
    <a href="https://github.com/nachorsanz/react-dynamic-components"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://dynamic-react-components-nachorsanz.vercel.app/">View Demo | WIP</a>
    ·
    <a href="https://github.com/nachorsanz/react-dynamic-components/issues">Report Bug</a>
    ·
    <a href="https://github.com/users/nachorsanz/projects/1">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <!--<li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>-->
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <!--<li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>-->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great button libraries and component libraries on Github; however, We tried to gather all functionality we think can be useful for a button in one library.

Here's why:

-   Your will save thousands of kilobytes for just the feature you want.
-   You can customize almost everything.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![React][react.js]][react-url]
[![StyledComponents][styledcomponents]][styledcomponents-url]
[![Storybook][storybook]][storybook-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROPS & DEFINITIONS-->

## Props & Definitions

-   size: ['small', 'medium', 'large'] // default: "large"
-   onClick: () => void
-   variant: ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning', 'info', 'light', 'dark', 'link'] // default: "primary"
-   withShadow?: boolean // default: false
-   disabled?: boolean // default: false
-   option: ['button', 'submit', 'reset'] // default: "button"
-   styles?: React.CSSProperties
-   bgColor?: string // default: ""
-   textColor?: string // default: ""
-   text?: string // default: "Button"
-   faIcon?: string | null // default: null "Font Awesome Icons"
-   colorIcon: string | null // default: null "Flat Colors Icons"
-   iconPosition?: ['left', 'right', 'none'] // default: "none"
-   className?: string // default: ""
-   children?: React.ReactNode // default: "Button"

<!-- USE EXAMPLES-->

## Use Examples

```
import { Button } from "dynamic-react-components";

function App() {

  return (
    <div className="App">

        <Button
          text={"React Dynamic Button"}
          variant={"danger"}
          faIcon={"FaReact"}
          iconPosition={"right"}
          size={"large"}
        />

    </div>
  );
}

export default App;
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

Please refer to the [Contributing guide](https://github.com/nachorsanz/react-dynamic-buttons/blob/main/CONTRIBUTING.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nachorsanz/react-dynamic-buttons?style=for-the-badge
[contributors-url]: https://github.com/nachorsanz/react-dynamic-buttons/graphs/contributors
[commits-shield]: https://img.shields.io/github/commit-activity/m/nachorsanz/react-dynamic-buttons?style=for-the-badge
[commits-url]: https://github.com/bshgroup/product-app/commits/main
[issues-shield]: https://img.shields.io/github/issues/nachorsanz/react-dynamic-buttons?style=for-the-badge
[issues-url]: https://github.com/nachorsanz/react-dynamic-buttons/issues
[license-shield]: https://img.shields.io/github/license/nachorsanz/react-dynamic-buttons?style=for-the-badge
[license-url]: https://github.com/nachorsanz/react-dynamic-buttons/blob/main/LICENSE.txt
[version-shield]: https://img.shields.io/github/package-json/v/nachorsanz/react-dynamic-buttons?style=for-the-badge
[version-url]: https://github.com/nachorsanz/react-dynamic-buttons/blob/main/package.json
[product-screenshot]: images/screenshot.png
[storybook]: https://img.shields.io/badge/Storybook-20232A?style=for-the-badge&logo=storybook&logoColor=FF4785
[storybook-url]: https://storybook.js.org/
[styledcomponents]: https://img.shields.io/badge/StyledComponents-20232A?style=for-the-badge&logo=styled-components&logoColor=DB7093
[styledcomponents-url]: https://styled-components.com/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
