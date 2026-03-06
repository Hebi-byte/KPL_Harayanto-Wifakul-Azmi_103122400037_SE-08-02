Buatlah sebuah fungsi bernama fizzBuzz yang menerima input larik (array) dan mengembalikan deretan bilangan dan "Fizz" untuk kelipatan 2, "Buzz" untuk kelipatan 7, dan "FizzBuzz" untuk kelipatan 14. Beri nama berkas program sebagai tm.js dan taruh di direktori TM.

Contoh:

```
Input:
[8, 9, 32, 75, 84]

Output:
Fizz 9 Fizz 75 FizzBuzz
```
untuk output ketika berhasil
![alt text](<Image/Output berhasil.png>)

ini dikarenakan hasil yang sesuia dengan syntax ``` for ``` dan ``` if else ```
seperti yang ada pada [tm.js](tm.js) tetapi ada suatu masalah dalam test yang mengharuskan ada koma
hal ini harus menggunakan tambahan bukan hanya ``` for ``` dan ``` if else ```
tapi juga harus menggunakan
``` let separator = params[0] <= 1 ? ", " : " "; ```
syntax ini menentukan array pertama itu nilai nya di bawah ``` 2 ```
seperti yang bisa di lihat pada tes pertama tidak menggunakan koma
```

assert.strictEqual(fizzBuzz([8, 9, 32, 75, 84]), "Fizz 9 Fizz 75 FizzBuzz", "Tes 1 gagal lolos");
    console.log("✅ Tes 1 berhasil");
```
dan tes kedua manggunakan koma

```
assert.strictEqual(fizzBuzz([1, 68, 83, 91, 97]), "1, Fizz, 83, Buzz, 97", "Tes 2 gagal lolos");
    console.log("✅ Tes 2 berhasil");
```

dan juga ada yang langsung memberitahukan bahwa ```input tidak valid``` dikarenakan bukan array saya akali dengan syntax
```
if (!Array.isArray(params)) {
        return "Input tidak valid";
    }
```

