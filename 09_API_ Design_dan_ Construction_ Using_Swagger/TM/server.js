const http = require("http");

const PORT = 3000;

function generateAngka(nama) {
    let total = 0;

    for (let i = 0; i < nama.length; i++) {
        total += nama.charCodeAt(i) * (i + 1);
    }

    return (total % 100) + 1;
}

const server = http.createServer((req, res) => {
    if (req.method !== "POST" || req.url !== "/") {
        res.writeHead(404, {
        "Content-Type": "application/json"
    });

    return res.end(JSON.stringify({
        jawaban: "Endpoint tidak ditemukan!"
        }));
    }

    let body = "";

    req.on("data", chunk => {
    body += chunk;
    });

    req.on("end", () => {
    try {
        const data = JSON.parse(body);

        const nama = data.nama;
        const tebakan = data.tebakan;

        const angkaBenar = generateAngka(nama);

        let jawaban;

        if (tebakan === angkaBenar) {
            jawaban = `Benar sekali! Tebakannya adalah ${angkaBenar}.`;
        } else if (tebakan > angkaBenar) {
            jawaban = "Tebakanmu terlalu tinggi!";
        } else {
            jawaban = "Tebakanmu terlalu rendah!";
        }

        res.writeHead(200, {
        "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
        jawaban: jawaban
        }));
    } catch (error) {
        res.writeHead(400, {
        "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
        jawaban: "Format JSON tidak valid!"
      }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});