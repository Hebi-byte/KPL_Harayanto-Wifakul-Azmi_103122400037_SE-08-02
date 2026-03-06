function ganjilGenap(input) {
    if (input % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

let apakahGenap = ganjilGenap(4);
console.log(apakahGenap);

function mutlak(input) {
    if (input < 0) {
        return -input;
    }else {
        return input;
    }
}

let hasilMutlak = mutlak(-5);
console.log(hasilMutlak);

let nama = "Alice";
console.log(nama);
console.log("Nama saya adalah " + nama);
console.log(`Nama saya adalah ${nama}`);

const user = {
    name: "John Doe",
    age: 30,
    isAdmin: false
};

console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);

const user2 = {
    "firstname": "Jane",
    lastname: "Smith",
};
console.log(user2["firstname"]);
console.log(user2.lastname);