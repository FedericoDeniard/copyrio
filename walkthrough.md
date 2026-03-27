# Copyrio – React SPA Migration: Walkthrough

## ¿Qué se hizo?

Migración completa del sitio HTML legacy a una **Single Page Application** con **React 18 + Vite + react-router-dom** y **Tailwind CSS**.

### Fidelidad de Marca (Dark Neon)
Ante el feedback de pérdida de identidad de marca, se restauró el esquema original de Copyrio:
- **Colores originales**: Fondo puro negro (`#000`), verde neón flúor (`#00ff00`) para textos/acentos, y amarillo alerta.
- **Logo Original**: Se respeta el GIF con animación original sin filtros.
- **Componentes**: Sidebar moderno, tarjetas estructuradas y llamadas a la acción en tema dark, usando los íconos de `lucide-react` pintados en neón.

## Estructura final

```
public_html/
├── tailwind.config.js      ← Config de la paleta Dark Neon
├── src/
│   ├── App.jsx             ← Router con 17 rutas
│   ├── index.css           ← Base de Tailwind (bg-brand-black)
│   ├── components/
│   │   ├── Layout.jsx      ← Sidebar colapsable
│   │   └── ProductPage.jsx ← Componente e-commerce a 2 columnas
│   └── pages/              ← Home, QuienesSomos, etc. (17 páginas)
```

## Verificación Final

- ✅ `npm run build` — 1748 módulos transformados (CSS: 20KB). Compilación sin errores ("Invalid hook calls" resueltos).
- ✅ Diseño y tipografía consistentes con la marca original Copyrio.
- ✅ SPA Navigation (React Router) funciona sin recargar la página.

## Comandos

```bash
npm run dev     # Desarrollo (localhost:5173)
npm run build   # Build de producción → dist/
```
