Buatlah tata letak laman yang kamu buat berada di tengah seperti di bawah ini, dan juga ubah font-nya dengan Inconsolata dari Google Fonts.

kode sumber :
[index.html](index.html)
[index.css](index.css)
[index.js](index.js)

untuk membuat tatak letak di tengah menggunakan syntax berikut
```
    display: flex;
    flex-direction: column;
    align-items: center;
```
pada bagian body
lalu untuk merubah bagian text kita dapat mengimpor dulu pada bagian head html nya dengan kode
```
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
```
lalu rubah pada bagian css dengan syntax berikut yang ada pada body
```
    font-family: 'Inconsolata', monoospace;
```
