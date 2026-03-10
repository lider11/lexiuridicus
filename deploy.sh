#!/bin/bash

# Deployment Automation Script for Lex Iuridicus
# Para ejecutar en servidor Hostinger

set -e

echo "🚀 Iniciando deployment de Lex Iuridicus..."

# Variables
PROJECT_DIR="/home/usuario/public_html/lexiuridicus"
NODE_ENV="production"
PORT=3000

# Actualizar código
echo "📥 Actualizando código desde repositorio..."
cd $PROJECT_DIR
git fetch origin
git reset --hard origin/main

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install --production

# Build
echo "🔨 Ejecutando build..."
npm run build

# Validar build
if [ $? -ne 0 ]; then
    echo "❌ Build falló. Abortando deployment."
    exit 1
fi

# Limpiar procesos anteriores
echo "🧹 Deteniendo procesos anteriores..."
pm2 delete lexiuridicus || true

# Iniciar con PM2
echo "▶️  Iniciando aplicación con PM2..."
pm2 start npm --name "lexiuridicus" -- start
pm2 save

echo "✅ Deployment completado exitosamente!"
echo "🌐 Aplicación disponible en: http://localhost:$PORT"
echo "📊 Monitorear con: pm2 logs lexiuridicus"
