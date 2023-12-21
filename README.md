# auto-component

[![npm version](https://badge.fury.io/js/auto-component.svg)](https://www.npmjs.com/package/auto-component)

> A tool to streamline component creation in React projects.

## Installation

Install `auto-component` as a development dependency within your project:

\`\`\`bash
npm install --save-dev auto-component
\`\`\`

## Usage

1. Import \`AutoComponent\` in the file where you're building the new component:

\`\`\`javascript
import AutoComponent from 'auto-component';
\`\`\`

![Step 2](step2.png){: .center-image }

2. Add the component to your code where you want it to be rendered:

\`\`\`jsx
<AutoComponent />
\`\`\`

![Step 3](step3.png){: .center-image }

## Getting Started

3. View your page to see the auto-component tool at the bottom, indicating where it will render your code:

![Step 4](step4.png){: .center-image }

4. Start building by telling \`auto-component\` what you want and clicking "Generate." The result will be rendered on the page. You can view the "Request" or "Response" tabs to inspect what is being sent to the AI and what was returned:

![Step 5](step5.gif){: .center-image }

## Making Changes

5. Ask \`auto-component\` to make changes to the code it provided, and see the changes rendered on the page:

![Step 6](step6.gif){: .center-image }

## Copying Your Code

6. When satisfied with the response, click on the "Response" tab underneath the input. Copy the code from the AI to use it in your codebase:

![Step 7](step7.gif){: .center-image }

## Start a New Session

7. Click the red X button to start a new session.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
