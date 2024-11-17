# Smart Lights - react.js

Smart Lights is a city management platform designed to enhance street lighting systems by reducing energy consumption, ensuring real-time analytics, and increasing security. The platform provides city managers with tools to monitor, control, and analyze the street light infrastructure efficiently.

## Features

- **Saves on power consumption & related costs**
- **Lowers downtimes** in the street light network
- **Detects power thefts** and ensures proactive measures
- **Smart monitoring and control** of street light infrastructure
- **Real-time actionable analytics** on power failures, lamp malfunctions, voltage issues, etc.
- **Increased security** in neighborhoods

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS, React Router
- **Icons**: Lucide Icons
- **Routing**: React Router for page navigation

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Before starting, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

 1. Clone the Repository:
   git clone https://github.com/your-username/smart-lights.git
   cd smart-lights

2. Install Dependencies and Run the following command to install all the necessary packages:

npm install
Run the Development Server:

3. After installation, you can start the local server by running:

npm run dev

This will start the application at http://localhost:3000.


Project Structure
Here is the structure of the project:


smart-lights/
├── public/
│   └── all-images here
├── src/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   ├── Ecosystem.tsx
│   │   ├── Products.tsx
│   │   ├── FeatureList.tsx
│   │   └── Footer.tsx 
│   ├── App.tsx
│   ├── index.tsx
│   └── styles/
│       └── index.css
└── package.json







# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
