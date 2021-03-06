<!-- ABOUT THE PROJECT -->
## About The Project

### Specification

1. When the user clicks a row in the list of candidates, it should expand a list of that candidate's applications. If the user clicks a row that is already expanded, it should close the list of that candidate's applications.
2. When the user clicks an application line item, bring up a modal/overlay that shows the candidate information and information specific to that application/role. Modal code has been provided in src/ui-kit/Modal.jsx, but feel free to use your own if you'd like.

### Screenshots

![Product Screen Shot - original][product-screenshot-original]

![Product Screen Shot - expanded][product-screenshot-expanded]

### Notes

- Icons have been provided in ui-kit/icons.
- Enum mappings and some colors are provided in src/utils/enums.js.
- The styled-components library is included in the package.json file. Feel free to use that for styling if you'd like.
- For the Last Action column, moment.js is included if you want to use it, but feel free to display the date any way you prefer.
<br />


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Installation

1. Clone the repo
```sh
git clone https://github.com/daveryde/nimble-code-challenge.git
```
2. In the root directory of the repo, install NPM packages
```sh
npm install
```
3. In the project directory, you can run:
```sh
yarn start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-original]: public/original.png
[product-screenshot-expanded]: public/expanded.png
