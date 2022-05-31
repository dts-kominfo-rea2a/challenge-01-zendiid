// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Color List
const colorList = {
    yellow: "Yellow",
    pink: "Pink",
    white: "White",
    purple: "Purple",
    blue: "Blue",
    black: "Black",
    grey: "Grey"
};

// Restaurant List
const restoList = {
    bento: "Bento",
    sushi: "Sushi",
    pancake: "Pancake",
    eggy: "Eggy",
    tempura: "Tempura",
    padang: "Padang",
    tteok: "Tteok",
    katsu: "Katsu",
    geprek: "Geprek"
};
  
// Set data
let monicaData = {
    color: new Set([
        colorList.yellow,
        colorList.pink,
        colorList.white,
        colorList.purple
    ]),
    resto: new Set([
        restoList.bento,
        restoList.sushi,
        restoList.pancake,
        restoList.eggy,
        restoList.tempura,
        restoList.bento,
        restoList.eggy,
        restoList.padang,
        restoList.tteok,
        restoList.sushi,
        restoList.sushi
    ]),
    education: [
        { name: "SD 01", city: "Jakarta", graduate: "2016" },
        { name: "SMP 02", city: "Jakarta", graduate: "2019" },
        { name: "SMA 03", city: "Tangerang" }
    ]
};

let wendyData = {
    color: new Set([
        colorList.blue,
        colorList.black,
        colorList.grey
    ]),
    resto: new Set([
        restoList.tempura,
        restoList.bento,
        restoList.sushi,
        restoList.pancake,
        restoList.padang,
        restoList.katsu,
        restoList.geprek,
        restoList.pancake,
        restoList.eggy
    ]),
    education: [
        { name: "SD 02", city: "Jakarta", graduate: "2010" },
        { name: "SMP 03", city: "Bogor", graduate: "2013" },
        { name: "SMA 01", city: "Surabaya", graduate: "2016" },
        { name: "Universitas Maju", city: "Tangerang" }
    ],
}

// Assign users
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: [...monicaData.color],
    isHavePet: "Yes",
    education: [...monicaData.education],
    favoriteRestaurant: [...monicaData.resto]
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendy@dingdong.com",
    favoriteColor: [...wendyData.color],
    isHavePet: "No",
    education: [...wendyData.education],
    favoriteRestaurant: [...wendyData.resto]
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};