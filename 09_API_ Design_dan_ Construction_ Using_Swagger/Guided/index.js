import express from 'express';
import { swaggerUi, specs } from './swagger.js';

const app = express();

const port = 8000;
const host = 'localhost';

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

const daftarfilm = [];

/**
 * @swagger
 * /film:
 *   get:
 *     summary: Ambil semua film
 *     description: Mengembalikan daftar semua film yang tersedia
 *     responses:
 *       200:
 *         description: Daftar film berhasil diambil
 */
app.get('/film', (req, res) => {
    res.status(200).json(daftarfilm);
});

/**
 * @swagger
 * /film/{id}:
 *   get:
 *     summary: Ambil film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Film ditemukan
 *       404:
 *         description: Film tidak ditemukan
 */
app.get('/film/:id', (req, res) => {
    const film = daftarfilm.find(f => f.id === Number(req.params.id));

    if (!film) {
        return res.status(404).json({ message: 'Film tidak ditemukan' });
    }

    res.status(200).json(film);
});

/**
 * @swagger
 * /film:
 *   post:
 *     summary: Tambah film baru
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               judul:
 *                 type: string
 *                 example: Inception
 *               genre:
 *                 type: string
 *                 example: Sci-Fi
 *               tahun:
 *                 type: integer
 *                 example: 2010
 *     responses:
 *       201:
 *         description: Film berhasil ditambahkan
 */
app.post('/film', (req, res) => {
    const film = {
        id: daftarfilm.length + 1,
        judul: req.body.judul,
        genre: req.body.genre,
        tahun: req.body.tahun
    };

    daftarfilm.push(film);
    res.status(201).json(film);
});

/**
 * @swagger
 * /film/{id}:
 *   delete:
 *     summary: Hapus film berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Film berhasil dihapus
 *       404:
 *         description: Film tidak ditemukan
 */
app.delete('/film/:id', (req, res) => {
    const index = daftarfilm.findIndex(f => f.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: 'Film tidak ditemukan' });
    }

    const filmdihapus = daftarfilm.splice(index, 1);
    res.status(200).json({
        message: 'Film berhasil dihapus',
        data: filmdihapus[0]
    });
});

app.listen(port, host, () => {
    console.log(`Server jalan di http://${host}:${port}`);
    console.log(`Swagger docs di http://${host}:${port}/docs`);
});