require('dotenv').config();
// const fetch = require('node-fetch'); // kalau Node < 18

async function ambilKutipan() {
    try {
        const response = await fetch(process.env.BASE_API);
        const data = await response.json();

        console.log(data.fact); // ini yang benar
    } catch (error) {
        console.error('Error:', error);
    }
}

ambilKutipan();