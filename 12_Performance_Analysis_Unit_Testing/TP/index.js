function main() {
  const data = [
    "123",
    456,
    "hello",
    78.9,
    true,
  ];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);
    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

function processData(data) {
  if (typeof data === "number") {
    return `Number: ${data * 2}`;
  }

  if (typeof data === "string") {
    const str = data.toLowerCase();
    const num = Number(str);

    if (!isNaN(num) && str.trim() !== "") {
      return `Number: ${num * 2}`;
    }

    return `Teks: ${str} (panjangnya: ${str.length})`;
  }

  return `Tipe data tidak didukung: ${typeof data}`;
}

main();