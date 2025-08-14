# Proyecto de Automatizacion Saucedemo QA

Pruebas automatizadas para [Sauce Demo](https://www.saucedemo.com) usando **Playwright**, **Cucumber** y **TypeScript**.


---

## Tabla de Contenidos

1. [Descripción del Proyecto](#descripción-del-proyecto)  
2. [Prerequisitos](#prerequisitos)  
3. [Instalación](#instalación)  
4. [Estructura del Proyecto](#estructura-del-proyecto)  
5. [Configuración del Entorno](#configuración-del-entorno)  
6. [Ejecución de Pruebas](#ejecución-de-pruebas)  
7. [Reportes](#reportes)  
8. [Notas](#notas)  
9. [Contribuciones](#contribuciones)

---

## Descripción del Proyecto

Este proyecto implementa pruebas automatizadas para los siguientes escenarios:

1. El usuario puede iniciar sesión con credenciales válidas.  
2. El usuario no puede iniciar sesión con credenciales inválidas.  
3. El usuario puede agregar productos al carrito de compras.  
4. El usuario puede ver los productos agregados en el carrito.  
5. El usuario puede completar el proceso de compra y ver la confirmación.  

**Patrón de diseño:** Page Object Model (POM)

**Librerías utilizadas:**  
- Playwright  
- Cucumber  
- ts-node  
- multiple-cucumber-html-reporter  
- faker  

---

## Prerequisitos

- Node.js >= 18  
- npm >= 9  
- Git

---

## Instalación

**1. Clonar el repositorio:** 
    
    bash
    git clone https://github.com/tuusuario/saucedemo-qa.git
    cd saucedemo-qa

**2. Instalar dependencias:**
    
    bash
    npm install

**3. Instalar los navegadores de Playwright:**
    
    bash
    npx playwright install

## Estructura del Proyecto

    saucedemo-qa/
    ├─ features/           # Archivos feature en Gherkin
    ├─ src/
    │  ├─ pages/           # Clases POM (Page Object Model)
    │  ├─ steps/           # Step definitions
    │  ├─ supports/        # Hooks, entorno, locators
    ├─ reports/            # Reportes JSON y HTML
    ├─ package.json
    ├─ tsconfig.json
    └─ README.md

## Configuración del Entorno

Editar src/supports/env.ts:

    export const ENV = {
        BASE_URL: 'https://www.saucedemo.com',
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce'
    };

## Ejecución de Pruebas

Ejecutar todas las pruebas:

    bash
    npm run test

## Reportes:

    npm run test:report


Scripts disponibles en package.json:

    "scripts": {
        "test": "cucumber-js features --require-module ts-node/register --require src/   steps/**/*.ts --format json:reports/cucumber-report.json",
    "report": "ts-node --transpile-only generate-multi-report.ts",
    "test:report": "npm run test || true && npm run report" 
    }

## Notas

Las capturas se adjuntan automáticamente al JSON de Cucumber.

Las pruebas utilizan Page Object Model para mantener el código organizado.

Faker puede usarse para generar datos dinámicos en escenarios de checkout.

## Contribuciones

Hacer un fork del repositorio

Crear una nueva rama (git checkout -b feature/TuFeature)

Hacer commit de los cambios (git commit -m 'Agregar nueva feature')

Subir la rama (git push origin feature/TuFeature)

Crear un Pull Request