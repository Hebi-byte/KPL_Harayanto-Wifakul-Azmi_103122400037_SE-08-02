# 14_TP_Clean_Code

## Nama : Haryanto Wifakul Azmi  
## Kelas : SE-08-02  
## Nim : 103122400037  

---

## Soal

Diberikan sebuah kode JavaScript yang digunakan untuk mengambil rincian pesanan, menampilkan data pesanan pada modal, mengatur tombol untuk menutup modal, serta menjalankan proses konfirmasi pesanan.

Kode tersebut dapat berjalan, tetapi masih menyalahi beberapa prinsip **clean code** karena terlalu banyak proses ditangani dalam satu fungsi. Lakukan refaktorisasi agar kode lebih mudah dibaca, dipahami, dirawat, dan dikembangkan.

Tugas:

1. Identifikasi bagian kode yang belum menerapkan prinsip clean code.
2. Lakukan refaktorisasi pada kode tersebut.
3. Jelaskan perubahan yang dilakukan berdasarkan prinsip clean code.

---

## Kode Sumber

* Program utama: [`index.js`](index.js)

---

## Deskripsi

Program digunakan untuk menampilkan rincian pesanan pada sebuah modal. Ketika pengguna membuka rincian pesanan, program mengambil data pesanan dari API, menampilkan ID dan status pesanan, serta mengatur tombol konfirmasi sesuai dengan status pesanan tersebut.

Pada kode awal, seluruh proses ditulis dalam satu fungsi bernama `fetchOrderDetails`. Fungsi tersebut menangani terlalu banyak pekerjaan sekaligus, yaitu mengambil data dari API, memproses respons, menampilkan data ke elemen HTML, membuka modal, serta mengatur tombol modal.

Kode awal memang dapat bekerja, tetapi lebih sulit dibaca dan dirawat karena memiliki tanggung jawab yang terlalu banyak. Oleh karena itu, kode diperbaiki dengan memisahkan setiap proses ke dalam fungsi yang lebih kecil dan memiliki satu tugas utama.

---

### 1. Kode Awal Sebelum Refaktorisasi

Kode awal program adalah sebagai berikut:

```js
function fetchOrderDetails(orderId, token) {
  fetch(`https://example.com/api/order/${orderId}`, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch order details");
      }
      return response.json();
    })
    .then((order) => {
      // Display order info
      const modal = document.getElementById("orderModal");
      const detailsDiv = modal.querySelector("#orderDetails");
      detailsDiv.innerHTML = "";

      const header = document.createElement("h3");
      header.textContent = `Order ID: ${order.id}`;
      detailsDiv.appendChild(header);

      const status = document.createElement("p");
      status.textContent = `Status: ${order.status}`;
      detailsDiv.appendChild(status);

      // Show modal
      modal.style.display = "block";

      // Setup close button
      const closeBtn = modal.querySelector(".close");
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

      // Setup confirm button
      const confirmBtn = modal.querySelector("#confirmOrderBtn");
      if (order.status === "Delivered") {
        confirmBtn.style.display = "none";
      } else {
        confirmBtn.addEventListener("click", () => {
          confirmOrder(order.id, token);
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
```

---

### 2. Masalah pada Kode Awal

Kode awal memiliki beberapa bagian yang belum sesuai dengan prinsip clean code:

1. Fungsi `fetchOrderDetails` melakukan terlalu banyak pekerjaan sekaligus.
2. Proses pengambilan data, manipulasi DOM, pengaturan tombol, dan penampilan modal berada dalam satu fungsi yang panjang.
3. Rangkaian `.then()` membuat alur proses asynchronous lebih sulit dibaca dibandingkan penggunaan `async` dan `await`.
4. Beberapa komentar hanya menjelaskan hal yang sebenarnya sudah dapat dipahami dari kode.
5. Event listener dapat ditambahkan berulang kali ketika modal dibuka berkali-kali.
6. Objek pesanan belum diproses secara terstruktur sesuai data yang dibutuhkan tampilan.

---

### 3. Kode Setelah Refaktorisasi

Berikut adalah kode program yang sudah diperbaiki:

```js
async function getOrderData(orderId, token) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${orderId}`,
      {
        headers: { Authorization: token },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch order details");
    }

    const data = await response.json();

    return {
      id: data.id,
      status: data.completed ? "Delivered" : "Processing",
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

function renderOrderDetails({ id, status }) {
  const detailsDiv = document.getElementById("orderDetails");
  detailsDiv.innerHTML = "";

  const header = document.createElement("h3");
  header.textContent = `Order ID: ${id}`;

  const statusEl = document.createElement("p");
  statusEl.textContent = `Status: ${status}`;

  detailsDiv.append(header, statusEl);
}

function setupModalListeners({ id, status }, token) {
  const modal = document.getElementById("orderModal");
  const closeBtn = modal.querySelector(".close");
  const confirmBtn = document.getElementById("confirmOrderBtn");

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  if (status === "Delivered") {
    confirmBtn.style.display = "none";
  } else {
    confirmBtn.style.display = "block";
    confirmBtn.onclick = () => confirmOrder(id, token);
  }
}

async function showOrderModal(orderId, token) {
  const order = await getOrderData(orderId, token);

  if (order) {
    renderOrderDetails(order);
    setupModalListeners(order, token);

    const modal = document.getElementById("orderModal");
    modal.style.display = "block";
  }
}
```

---

### 4. Penjelasan Fungsi `getOrderData`

Fungsi `getOrderData` digunakan khusus untuk mengambil data pesanan dari API.

```js
async function getOrderData(orderId, token) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${orderId}`,
      {
        headers: { Authorization: token },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch order details");
    }

    const data = await response.json();

    return {
      id: data.id,
      status: data.completed ? "Delivered" : "Processing",
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
```

Penjelasan fungsi:

* Fungsi menggunakan `async` dan `await` agar alur pengambilan data lebih mudah dibaca.
* Parameter `orderId` digunakan untuk menentukan data pesanan yang akan diambil.
* Parameter `token` dikirim melalui header `Authorization`.
* Apabila respons API gagal, program menampilkan pesan error dan mengembalikan nilai `null`.
* Data dari API disederhanakan menjadi objek yang hanya berisi `id` dan `status`.
* Properti `completed` dari API contoh dikonversi menjadi status `Delivered` atau `Processing`.

---

### 5. Penjelasan Fungsi `renderOrderDetails`

Fungsi `renderOrderDetails` digunakan khusus untuk menampilkan data pesanan pada halaman.

```js
function renderOrderDetails({ id, status }) {
  const detailsDiv = document.getElementById("orderDetails");
  detailsDiv.innerHTML = "";

  const header = document.createElement("h3");
  header.textContent = `Order ID: ${id}`;

  const statusEl = document.createElement("p");
  statusEl.textContent = `Status: ${status}`;

  detailsDiv.append(header, statusEl);
}
```

Penjelasan fungsi:

* Parameter menggunakan destructuring agar data yang dibutuhkan terlihat dengan jelas.
* Isi elemen `orderDetails` dikosongkan sebelum data baru ditampilkan.
* Elemen `h3` digunakan untuk menampilkan ID pesanan.
* Elemen `p` digunakan untuk menampilkan status pesanan.
* Method `append()` digunakan untuk menambahkan beberapa elemen sekaligus.

---

### 6. Penjelasan Fungsi `setupModalListeners`

Fungsi `setupModalListeners` digunakan khusus untuk mengatur aksi tombol pada modal.

```js
function setupModalListeners({ id, status }, token) {
  const modal = document.getElementById("orderModal");
  const closeBtn = modal.querySelector(".close");
  const confirmBtn = document.getElementById("confirmOrderBtn");

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  if (status === "Delivered") {
    confirmBtn.style.display = "none";
  } else {
    confirmBtn.style.display = "block";
    confirmBtn.onclick = () => confirmOrder(id, token);
  }
}
```

Penjelasan fungsi:

* Tombol `closeBtn` digunakan untuk menutup modal.
* Tombol konfirmasi disembunyikan apabila status pesanan sudah `Delivered`.
* Tombol konfirmasi ditampilkan apabila pesanan masih diproses.
* Properti `onclick` digunakan agar aksi tombol diganti, bukan ditambahkan berulang kali setiap modal dibuka.

---

### 7. Penjelasan Fungsi `showOrderModal`

Fungsi `showOrderModal` digunakan sebagai pengatur alur utama ketika modal pesanan dibuka.

```js
async function showOrderModal(orderId, token) {
  const order = await getOrderData(orderId, token);

  if (order) {
    renderOrderDetails(order);
    setupModalListeners(order, token);

    const modal = document.getElementById("orderModal");
    modal.style.display = "block";
  }
}
```

Penjelasan fungsi:

* Fungsi mengambil data melalui `getOrderData`.
* Apabila data berhasil diperoleh, fungsi menampilkan rincian pesanan.
* Fungsi mengatur tombol modal melalui `setupModalListeners`.
* Modal baru ditampilkan setelah data berhasil diproses.

---

### 8. Prinsip Clean Code yang Diterapkan

Refaktorisasi kode menerapkan beberapa prinsip clean code sebagai berikut:

1. **Nama fungsi yang bermakna**  
   Nama `getOrderData`, `renderOrderDetails`, `setupModalListeners`, dan `showOrderModal` menjelaskan tujuan setiap fungsi dengan jelas.

2. **Satu fungsi untuk satu pekerjaan**  
   Setiap fungsi hanya memiliki satu tanggung jawab utama, sehingga kode lebih mudah dipahami dan diuji.

3. **Penggunaan `const`**  
   Variabel yang tidak ditugaskan ulang dideklarasikan menggunakan `const`.

4. **Jumlah parameter terbatas**  
   Fungsi menggunakan dua parameter atau kurang. Data pesanan dikirim sebagai objek dan dibaca menggunakan destructuring.

5. **Komentar seperlunya**  
   Kode dibuat cukup jelas melalui penamaan fungsi dan variabel, sehingga tidak memerlukan banyak komentar tambahan.

6. **Alur asynchronous yang lebih mudah dibaca**  
   Penggunaan `async` dan `await` membuat proses pengambilan data lebih ringkas dibandingkan rangkaian `.then()`.

7. **Pencegahan event listener berulang**  
   Penggunaan `onclick` mencegah aksi tombol menumpuk ketika modal dibuka lebih dari satu kali.

---

## Kesimpulan

Kode pada Tugas Pendahuluan Modul 14 sebelumnya dapat berjalan, tetapi belum menerapkan prinsip clean code dengan baik karena satu fungsi menangani terlalu banyak proses sekaligus.

Setelah dilakukan refaktorisasi, kode dipisahkan menjadi empat fungsi utama, yaitu `getOrderData`, `renderOrderDetails`, `setupModalListeners`, dan `showOrderModal`. Setiap fungsi memiliki nama yang jelas dan hanya menangani satu tanggung jawab utama.

Dengan perubahan tersebut, kode menjadi lebih mudah dibaca, dipahami, diuji, dirawat, dan dikembangkan pada masa mendatang.
