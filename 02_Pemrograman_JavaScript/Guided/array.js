const kota = ["Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta"];

console.log(kota);

kota.push("Semarang");
console.log(kota); // Output: ["Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta", "Semarang"]

kota.unshift("Bali");
console.log(kota); // Output: ["Bali", "Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta", "Semarang"]
console.log(kota[0]); // Output: "Bali"

kota.pop();
console.log(kota); // Output: ["Bali", "Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta"]

kota.shift();
console.log(kota); // Output: ["Jakarta", "Bandung", "Surabaya", "Medan", "Yogyakarta"]

kota.reverse();
console.log(kota); // Output: ["Yogyakarta", "Medan", "Surabaya", "Bandung", "Jakarta"]
kota.reverse();

kota.splice(2, 1);
console.log(kota); // Output: ["Jakarta", "Bandung", "Medan", "Yogyakarta"]

kota[2] = "Semarang";
console.log(kota); // Output: ["Jakarta", "Bandung", "Semarang", "Yogyakarta"]