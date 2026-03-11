# Hostinger Build Checklist (Next.js)

Usa esta guía para evitar diferencias entre local y Hostinger.

## 1) Runtime fijo
- Node recomendado: **20.x** (alineado con `.nvmrc` y `package.json > engines`).
- NPM recomendado: **10.x**.

## 2) Comando de instalación/build
Configura en Hostinger:

```bash
npm ci --no-audit --no-fund && npm run build
```

No uses `npm install` para CI/CD, porque puede regenerar árbol de dependencias.

## 3) Variables de entorno mínimas
Define en Hostinger (Build/Runtime):

- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://tu-dominio.com`

Si usas el formulario SMTP en backend, además:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

## 4) Cache y commit
- Limpia cache de build/deps si aparece un módulo antiguo (ej. `lucide-react`).
- Verifica que Hostinger esté construyendo el commit SHA correcto.

## 5) Verificación local previa (idéntica a CI)
```bash
npm run verify:hostinger
```

## 6) Qué revisar si falla
- Primer `Module not found` real + import trace completo.
- Diferencias de mayúsculas/minúsculas en rutas (`components` vs `Components`).
- Variables faltantes en panel de Hostinger.
