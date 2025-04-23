# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

#Prueba React Junior

EI objetivo de esta prueba técnica es crear una aplicación similar a la que se
proporciona en este enlace: https://prueba-tecnica-usuarios.vercel.app/para lograrlo se debe,
utilizar la API proporcionada por:

https://randomuser.me/

- Obtener 100 filas de datos utilizando la API.
- Mostrar los datos en un formato de tabla, similar al ejemplo.
- Proporcionar la opción de colorear las filas como se muestra en el ejemplo.
- Permitir que los datos se ordenen por país como se muestra en el ejemplo.
- Habilitar la capacidad de eliminar una fila como se muestra en el ejemplo.
- Implementar una función que permita al usuario restaurar el estado inicial, es decir, que se recuperarán todas las - filas eliminadas.
- Manejar cualquier error potencial que pueda ocurrir.
- Implementar una función que permita al usuario filtrar los datos por país.
- Evitar ordenar nuevamente los datos cuando el usuario está cambiando el filtro por país.
- Ordene haciendo clic en el encabezado de la columna.
- Proporcione un archivo README.md con instrucciones sobre cómo ejecutar la aplicación.

Notas adicionales:

- No usar autocompletado de código IA.
- No es necesario completar toda la prueba, lo que se alcance en el tiempo establecido está bien.
- Para maquetar se puede utilizar cualquier librería CSS puro, tailwindCSS etc...
- Es obligatorio usar React con TypeScript.
