# Organización de archivos en servidor (Next.js + Tailwind)

Esta guía te muestra una estructura clara para desplegar `lexiuridicus` en un VPS Linux (Ubuntu), separando código, configuración, logs y despliegues.

## 1) Estructura recomendada

```text
/var/www/
└── lexiuridicus/
    ├── current -> /var/www/lexiuridicus/releases/20260309-120000/
    ├── releases/
    │   ├── 20260308-230000/
    │   └── 20260309-120000/
    ├── shared/
    │   ├── .env.production
    │   ├── logs/
    │   └── uploads/            # opcional, si luego guardas archivos
    └── scripts/
        ├── deploy.sh
        └── rollback.sh

/etc/
├── nginx/
│   └── sites-available/
│       └── lexiuridicus.site
└── systemd/system/
    └── lexiuridicus.service
```

## 2) Qué va en cada carpeta

- `releases/`: cada despliegue nuevo en carpeta con timestamp.
- `current`: symlink al release activo (permite rollback rápido).
- `shared/.env.production`: variables de entorno fuera del repo.
- `shared/logs`: logs de aplicación/proceso.
- `scripts/`: automatización de deploy y rollback.

## 3) Flujo de despliegue recomendado

1. Subes/actualizas el código en un nuevo release.
2. Instalas dependencias (`npm ci`).
3. Compilas (`npm run build`).
4. Apuntas `current` al release nuevo.
5. Reinicias servicio (`systemctl restart lexiuridicus`).
6. Si algo falla, vuelves `current` al release anterior (rollback).

## 4) Ejemplo de comandos (primera vez)

```bash
sudo mkdir -p /var/www/lexiuridicus/{releases,shared/{logs,uploads},scripts}
sudo chown -R www-data:www-data /var/www/lexiuridicus
```

## 5) Servicio con systemd

Archivo: `/etc/systemd/system/lexiuridicus.service`

```ini
[Unit]
Description=Lex Iuridicus Next.js App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/lexiuridicus/current
EnvironmentFile=/var/www/lexiuridicus/shared/.env.production
ExecStart=/usr/bin/npm run start -- -p 3000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Aplicar:

```bash
sudo systemctl daemon-reload
sudo systemctl enable lexiuridicus
sudo systemctl start lexiuridicus
sudo systemctl status lexiuridicus
```

## 6) Nginx como reverse proxy

Archivo: `/etc/nginx/sites-available/lexiuridicus.site`

```nginx
server {
    listen 80;
    server_name lexiuridicus.site www.lexiuridicus.site;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Activar:

```bash
sudo ln -s /etc/nginx/sites-available/lexiuridicus.site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 7) Variables de entorno

Crear `/var/www/lexiuridicus/shared/.env.production` con:

```env
NODE_ENV=production
PORT=3000
# agrega aquí futuras claves/API URLs
```

## 8) Checklist de orden en servidor

- [ ] Código en `/var/www/lexiuridicus/releases/...`
- [ ] Symlink `current` apuntando al release activo.
- [ ] `.env.production` fuera del repo.
- [ ] Logs en `shared/logs`.
- [ ] Servicio `systemd` activo.
- [ ] Nginx proxy OK.
- [ ] HTTPS con certbot (siguiente paso recomendado).

## 9) ¿Y si luego crece el proyecto?

Cuando escale, mantén esta base y agrega:
- CI/CD (GitHub Actions) para automatizar deploy.
- PM2 o solo systemd (con systemd ya estás bien para empezar).
- Monitoreo con Uptime + logs centralizados.
