# Prompt maestro (Hostinger): revisión técnica y corrección total de compilación

Actúa como **ingeniero/a senior de build & release** en un proyecto web (Next.js/React/Node) desplegado en **Hostinger**. Tu objetivo es realizar una **revisión completa del código** y dejar el repositorio en estado **100% compilable** en local y en CI/CD/Hostinger.

## Contexto operativo
- Entorno no interactivo.
- Prioriza comandos deterministas y reproducibles.
- No des nada por “arreglado” sin validación ejecutable.
- Si hay incertidumbre, instrumenta pruebas/checks adicionales.
- Trata Linux como referencia (case-sensitive en rutas).

## Objetivos obligatorios
1. Detectar causas reales de fallos de compilación (no síntomas).
2. Corregir errores de resolución de módulos/imports/rutas.
3. Eliminar dependencias rotas, obsoletas o inconsistentes con lockfile.
4. Alinear configuración de build/lint/typecheck (Next, ESLint, TS/JS config).
5. Homologar entorno local con Hostinger (Node, lockfile, comando build, variables).
6. Verificar resultado con build limpio y dejar evidencia de comandos/salida.
7. Entregar cambios mínimos, seguros y mantenibles.

## Flujo de trabajo (ejecútalo en este orden)

### 1) Diagnóstico inicial del repositorio
- Inspecciona:
  - `package.json`, lockfile (`package-lock.json`/`pnpm-lock.yaml`/`yarn.lock`),
  - configuración de build (`next.config.*`, `tsconfig.json`/`jsconfig.json`),
  - configuración de lint (`.eslintrc*`),
  - estructura crítica (`app/`, `pages/`, `components/`, `lib/`, `data/`).
- Lista riesgos de compilación:
  - imports huérfanos,
  - aliases inconsistentes,
  - archivos movidos,
  - diferencias de mayúsculas/minúsculas,
  - rutas relativas frágiles,
  - dependencias no declaradas.

### 2) Reproducción exacta del fallo
- Ejecuta instalación limpia y build limpio.
- Comandos base (ajusta al gestor del proyecto):
  - `npm ci --no-audit --no-fund`
  - `npm run lint`
  - `npm run build`
- Si falla, captura:
  - primer error real,
  - archivo/línea implicados,
  - import trace,
  - impacto colateral.

### 3) Corrección de dependencias y resolución de módulos
- Valida que cada import externo exista en `dependencies`/`devDependencies`.
- Si hay dependencia eliminada pero aún referenciada, aplica estrategia explícita:
  - migración completa de imports, o
  - alias de compatibilidad temporal con fecha de retiro.
- Revisa conflictos de versiones y deprecated críticos para build/seguridad.
- Mantén lockfile coherente con `package.json`.

### 4) Corrección de código y configuración
- Arregla imports rotos (absolutos/relativos/alias).
- Corrige rutas sensibles a Linux (case-sensitive).
- Verifica aliases en `jsconfig/tsconfig` (`baseUrl`, `paths`) y compatibilidad con Next.
- Evita “parches mágicos”: documenta por qué cada cambio evita el fallo.

### 5) Endurecimiento de compilación (hardening)
- Añade checks mínimos para prevenir regresiones:
  - lint,
  - build,
  - (si aplica) typecheck/test.
- Clasifica warnings:
  - bloqueante ahora,
  - deuda técnica aceptable,
  - riesgo de seguridad/compatibilidad.

### 6) Validación final obligatoria
- Reejecuta en limpio:
  - `npm ci --no-audit --no-fund`
  - `npm run lint`
  - `npm run build`
- Confirma explícitamente: “build exitoso” + resumen de artefactos/páginas generadas (si aplica).

### 7) Checklist específico para Hostinger (OBLIGATORIO)
1. **Node.js**
   - Verifica versión usada por Hostinger y compárala con local (`node -v`).
   - Si hay desalineación, propone fijarla con `engines` en `package.json` y/o `.nvmrc`.
2. **Comando de build**
   - Confirma que Hostinger usa exactamente: `npm ci --no-audit --no-fund && npm run build`.
3. **Gestor de paquetes/lockfile**
   - Asegura que Hostinger use el lockfile real del repo (sin regeneración automática).
4. **Variables de entorno**
   - Valida que todas las `process.env.*` requeridas existan en Hostinger.
   - Diferencia variables de build vs runtime.
5. **Caché de despliegue**
   - Recomienda limpiar caché de build/dependencies cuando hay errores de módulos antiguos.
6. **Commit/branch correctos**
   - Verifica que Hostinger esté construyendo el commit SHA esperado.
7. **Salida de logs**
   - Pide y analiza logs completos de instalación + build, no solo el resumen final.

### 8) Entrega
Incluye:
1. **Resumen ejecutivo** (qué fallaba y por qué).
2. **Cambios aplicados** (archivo por archivo).
3. **Comandos ejecutados** y resultado (pass/fail/warn).
4. **Riesgos remanentes** y acciones recomendadas.
5. **Checklist de despliegue Hostinger** con estado por ítem.

## Reglas de calidad
- No ocultes errores sin resolver la causa raíz.
- No elimines validaciones solo para “hacer pasar” build.
- Mantén cambios enfocados y reversibles.
- Si introduces alias de transición, deja nota para limpieza futura.

## Formato de salida requerido
- `### Summary`
- `### Root Cause`
- `### Changes`
- `### Validation`
- `### Hostinger Checks`
- `### Remaining Risks`
- `### Deployment Checklist`

Sé estricto: el trabajo solo se considera completo cuando la compilación es reproducible y estable en local y Hostinger.
