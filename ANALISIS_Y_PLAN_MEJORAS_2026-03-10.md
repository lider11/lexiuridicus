# Análisis técnico del repositorio `lexiuridicus`

Fecha: 2026-03-10

## 1) Resumen ejecutivo

El repositorio implementa una landing corporativa con **Next.js 14 (App Router)** y **TailwindCSS**, con una base visual sólida y despliegue listo para producción. La aplicación compila correctamente y genera páginas estáticas para home y páginas de servicios.

A nivel técnico, hay oportunidades de mejora de impacto alto en:

- **mantenibilidad** (duplicación de contenido y componentes extensos),
- **accesibilidad** (semántica, navegación por teclado, modal),
- **calidad frontend** (clases dinámicas de Tailwind que pueden romper estilos),
- **flujo de datos** (formulario actualmente simulado sin consumo del endpoint real),
- **SEO y robustez operativa** (activos referenciados que no están versionados y sitemap con fechas fijas).

## 2) Estado actual observado

### 2.1 Stack y configuración
- Next.js 14.2.5, React 18.3.1, Tailwind 3.4.7.
- `reactStrictMode: true` activo.
- Headers de seguridad definidos en `next.config.mjs`, incluyendo CSP.

### 2.2 Arquitectura
- Estructura App Router correcta (`app/layout.js`, `app/page.js`, `app/not-found.js`, `app/servicios/*`).
- Componente de servicios con modal (`components/ServiceGrid.js`) y formulario (`components/ContactForm.js`).
- Endpoint API disponible en `app/api/contact/route.js`.

### 2.3 Validación técnica rápida
- `npm run build` ejecuta de forma exitosa y genera 9 rutas.
- `npm run lint` no se ejecuta de forma no interactiva porque solicita inicializar configuración de ESLint.

## 3) Hallazgos y oportunidades de mejora

## A. Mantenibilidad y escalabilidad
1. **Contenido embebido en componentes grandes**
   - `app/page.js` y páginas de servicios contienen mucho contenido estático inline.
   - Riesgo: cambios editoriales costosos y mayor probabilidad de errores al escalar.

2. **Duplicación de estructura entre páginas de servicios**
   - Las páginas `/servicios/*` repiten patrones de hero, listas, beneficios y CTA.
   - Riesgo: inconsistencias visuales/funcionales entre páginas.

## B. UI/UX y accesibilidad
3. **Modal de servicios sin manejo completo de accesibilidad**
   - No hay foco inicial, trampa de foco, ni cierre por `Escape` en el modal.
   - Riesgo: mala experiencia para teclado/lectores de pantalla.

4. **Semántica en layout**
   - `app/layout.js` envuelve `children` en `<header role="banner">` cuando debería usarse `<main>` en páginas y reservar `<header>` para cabecera.
   - Riesgo: estructura semántica confusa para tecnologías asistivas.

5. **Formulario con UX inconsistente**
   - `ContactForm` simula envío local con `alert`, pero existe un endpoint real `/api/contact` que no se usa.
   - Riesgo: percepción de funcionalidad engañosa y pérdida de leads.

## C. Calidad técnica / Tailwind
6. **Uso de clases dinámicas no seguras para purge**
   - En `ServiceGrid.js` hay clases como `hover:border-${service.color}-300` y `bg-${service.color}-100/50`.
   - Riesgo: Tailwind no detecta clases dinámicas en build y puede eliminar estilos esperados.

## D. SEO y contenido técnico
7. **Riesgo de activos faltantes en metadata y manifest**
   - Se referencian `og-image.png`, `logo.png`, íconos de manifest y screenshots, pero no están todos visibles en `public/`.
   - Riesgo: errores 404 en preview social/PWA.

8. **Sitemap estático con fechas fijas**
   - `public/sitemap.xml` contiene `lastmod` manual.
   - Riesgo: desactualización SEO con el tiempo.

## E. Operación y calidad
9. **ESLint no configurado de forma estable para CI**
   - `next lint` solicita setup interactivo.
   - Riesgo: sin control automático de calidad en PRs.

## 4) Plan de mejoras priorizado

## Fase 1 (0–2 semanas) — Quick wins de alto impacto
1. **Configurar ESLint no interactivo + reglas base del proyecto**.
2. **Conectar `ContactForm` al endpoint `/api/contact`** con estados de éxito/error y mensajes no bloqueantes.
3. **Corregir semántica base de layout** (`header/main/footer`).
4. **Eliminar clases dinámicas de Tailwind** migrando a un mapa de variantes explícitas por color.
5. **Auditar y agregar activos faltantes de SEO/PWA** (`og-image.png`, íconos del manifest, etc.).

**Resultado esperado:** mayor confiabilidad visual, flujo de contacto funcional y base de calidad para iterar.

## Fase 2 (2–5 semanas) — Estandarización y accesibilidad
1. **Crear un `ServiceTemplate` reutilizable** para todas las páginas de servicio.
2. **Externalizar contenido a archivos de datos** (`data/services.js`, `data/home.js`) para facilitar edición.
3. **Mejorar accesibilidad del modal** (focus trap, `aria-modal`, `role="dialog"`, escape key, foco de retorno).
4. **Revisión de contraste y navegación por teclado** en botones, tabs y estados focus.

**Resultado esperado:** menor deuda técnica y experiencia más inclusiva.

## Fase 3 (5–8 semanas) — Madurez SEO/medición
1. **Migrar sitemap y robots a generación dinámica** desde App Router metadata routes.
2. **Agregar analytics/eventos de conversión** (clic CTA, envío formulario, apertura modal servicio).
3. **Incorporar pruebas e2e críticas** (ruta home, navegación servicios, formulario, modal).
4. **Agregar pipeline CI (lint, build, test)** para validar cada PR.

**Resultado esperado:** trazabilidad de conversión y release process más robusto.

## 5) Backlog técnico sugerido (ordenado)

- [ ] Crear `.eslintrc.json` y script de lint sin prompts.
- [ ] Refactor de `ServiceGrid` para variantes de color explícitas.
- [ ] Integrar submit real en `ContactForm` + manejo de errores de red.
- [ ] Ajustar semántica global de `layout`.
- [ ] Crear módulo `data/services.js` y migrar contenido duplicado.
- [ ] Implementar componente `ServicePageTemplate`.
- [ ] Completar assets PWA/SEO faltantes y validación de rutas 200.
- [ ] Definir CI básica (GitHub Actions).
- [ ] Añadir Playwright smoke tests (home + contacto).

## 6) KPIs para medir mejora

- **Técnicos**: 0 warnings de lint bloqueantes, build estable en CI, cobertura de smoke tests.
- **UX/Accesibilidad**: Lighthouse Accessibility >= 90.
- **Negocio**: tasa de envío exitoso del formulario y CTR de CTA principal.
- **SEO**: páginas indexables sin 404 de assets críticos.

---

Si quieres, en el siguiente PR puedo ejecutar la **Fase 1 completa** (lint, refactor de Tailwind dinámico, y formulario conectado a API) para dejar la base sólida.
