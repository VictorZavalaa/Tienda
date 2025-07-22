# 🛒 Sistema Punto de Venta para Tienda de Abarrotes

## 🎯 Objetivo del Proyecto

Digitalizar una tienda de abarrotes familiar en México mediante el desarrollo de una **aplicación web desde cero**, que incluya:

- Control de inventario
- Registro de ventas
- Emisión de tickets
- Funcionalidad offline
- Sincronización con la nube cuando haya internet
- Preparación para migración a una Raspberry Pi
- Soporte para pagos con tarjeta (módulo listo para integrar)

---

## 🧱 Tecnologías Seleccionadas

| Módulo                  | Tecnología                  |
|-------------------------|-----------------------------|
| Frontend (UI)           | React (con Vite o CRA)      |
| Backend (API REST)      | Node.js + Express           |
| Base de datos local     | SQLite                      |
| Base de datos remota    | MySQL / PostgreSQL (opcional para sincronización) |
| Servidor local          | PC (desarrollo y uso) → Raspberry Pi (producción) |
| Impresión de tickets    | Impresora térmica (USB, compatible ESC/POS) |
| Pagos con tarjeta       | Módulo preparado para integrar con Square (USA) o Clip (México) |

---

## 🧭 Arquitectura General

```
┌────────────┐     API REST     ┌──────────────┐
│ React (Web)│ ───────────────▶ │ Node.js (API)│
└────────────┘                  └────┬──────────┘
                                     │
                         ┌───────────▼──────────┐
                         │     SQLite (Local)   │
                         │ + respaldo diario    │
                         └──────────┬───────────┘
                                    │
                      ┌────────────▼─────────────┐
                      │  Sincronización con nube │
                      └──────────────────────────┘
```

---

## 🔌 Funcionamiento Offline/Online

| Situación               | Comportamiento del sistema                                   |
|-------------------------|--------------------------------------------------------------|
| Sin internet            | Las ventas se guardan en SQLite local.                      |
| Con internet            | Se sincronizan automáticamente los datos con el servidor.   |
| Sin luz                 | Funciona si se usa laptop o respaldo (UPS).                 |
| Backup diario           | Copia de seguridad del archivo `.sqlite` en local.          |

---

## 📁 Estructura de carpetas propuesta

```
mi-tienda/
├── frontend/            # React
│   └── src/
├── backend/             # Node.js + Express
│   ├── db/
│   │   └── data.sqlite
│   ├── routes/
│   ├── controllers/     # (opcional más adelante)
│   └── backup/          # Respaldos diarios
└── README.md
```

---

## ✅ Funcionalidades planeadas

### Inventario
- Listado de productos
- Alta de productos
- Edición y eliminación
- Control de stock automático al vender

### Ventas
- Registro de ventas
- Relación con productos vendidos
- Cálculo automático de totales

### Tickets
- Generación de ticket en texto (backend)
- Envío a impresora térmica (librería `escpos`)
- Posibilidad de guardar como PDF

### Pagos
- Preparación de módulo para integrar con Square (o Clip)
- Envío de monto al lector externo
- Registro del método de pago

### Offline/Respaldo
- Funciona completamente sin internet
- Sincronización automática cuando vuelve la conexión
- Backup diario del archivo SQLite

---

## 📦 Hardware Recomendado

### Impresora térmica
- Epson TM-T20II o T20III (USB)
- Compatible con ESC/POS
- Precio estimado: $100–150 USD en Amazon USA

### Terminal de pago
- Square Reader (USB/Bluetooth) o Clip (si se usa en México)
- Precio: ~$49 USD (Square)

### Servidor
- PC local para desarrollo y operación inicial
- Posterior migración a Raspberry Pi (como servidor local de tienda)

---

## 📌 Estado Actual del Proyecto

✅ Backend:
- API REST con Node.js + Express funcionando  
- CRUD básico de productos  
- Conexión a SQLite  
- Servidor local en `http://localhost:3000`

✅ Frontend:
- Aplicación React funcionando  
- Listado de productos consumido desde backend  
- Axios configurado

🟡 Próximos pasos:
- Agregar formulario de alta de productos desde el frontend  
- Crear módulo de ventas  
- Implementar tickets  
- Preparar módulo para pagos con tarjeta  
- Configurar sincronización local ↔ nube  
- Automatizar respaldos diarios
