# Resolución de conflicto de merge (PR #2)

Se resolvió el conflicto en `components/Navbar.js` dejando una versión única y limpia del header.

## Estado final aplicado
- Se conserva el logo de marca (`/logo-lexiuridicus.svg`).
- Se conserva el nombre y subtítulo institucional de la marca.
- Se conservan mejoras de accesibilidad en menú móvil (`aria-expanded`, `aria-controls`).
- Se valida que no existan marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) en el repositorio.

## Checklist para cerrar PR
1. Confirmar que `components/Navbar.js` compila sin marcadores de conflicto.
2. Marcar archivo como resuelto.
3. Confirmar merge del PR.

## Comando de verificación usado
```bash
rg -n "^(<<<<<<<|=======|>>>>>>>)"
```
