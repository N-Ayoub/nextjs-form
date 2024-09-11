### Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd nextjs-form`.
3. Install the dependencies by running the following command: `npm install`.
4. Start the development server: `npm run dev`.
5> To run unit tests : `npm test`

## ENV

You can find the site key used for google recaptcha in the .env file

### Key Files and Directories

- src/app/form/page.js: Contains the form component with reCAPTCHA v3 integration.
- next.config.mjs: Next.js configuration file.
- tailwind.config.js: Tailwind CSS configuration file.
- postcss.config.js: PostCSS configuration file.
- .eslintrc.json: ESLint configuration file.
- package.json: Contains project metadata and dependencies.

### reCAPTCHA v3

To use reCAPTCHA v3, you need to provide your reCAPTCHA site key. Update the reCaptchaKey in the GoogleReCaptchaProvider component in src/app/form/page.js:
<GoogleReCaptchaProvider reCaptchaKey="your-recaptcha-key">

### Tailwind CSS

Tailwind CSS is configured in tailwind.config.js. You can customize the Tailwind configuration as needed.

### Dependencies

The project uses the following main dependencies:

1. next: React framework for server-side rendering.
2. react: JavaScript library for building user interfaces.
3. react-dom: Entry point to the DOM and server renderers for React.
4. react-hook-form: Library for managing form state.
5. axios: Promise-based HTTP client for the browser and Node.js.
6. react-google-recaptcha-v3: React component for Google reCAPTCHA v3.
7. tailwindcss: Utility-first CSS framework.
