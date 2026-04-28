const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require("path");

const app = express();
app.use(express.json());

// Data menu (contoh)
const menus = [
  { id: 1, nama: "Bakmi Goreng", kategori: "bakmi" },
  { id: 2, nama: "Bakmi Kuah",   kategori: "bakmi" },
  { id: 3, nama: "Rames Ayam",   kategori: "rames" },
  { id: 4, nama: "Rames Telur",  kategori: "rames" },
];

// ✅ Endpoint GET /menu — daftar kategori
/**
 * @swagger
 * /menu:
 *   get:
 *     summary: Ambil semua kategori menu
 *     description: Mengembalikan daftar semua nama kategori menu yang tersedia
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 kategori_tersedia:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["bakmi", "rames"]
 */
app.get('/menu', (req, res) => {
  // Ambil kategori unik dari data menu
  const kategori_tersedia = [...new Set(menus.map(m => m.kategori))];
  res.json({ kategori_tersedia });
});

// Setup Swagger
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: { title: 'Menu API', version: '1.0.0' },
  },
  apis: [path.join(__dirname, "*.js")],
});

console.log(swaggerSpec.paths);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
  console.log('Swagger UI: http://localhost:3000/api-docs');
});