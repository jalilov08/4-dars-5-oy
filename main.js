// const heelo = document.getElementById('hi')

// const test = document.getElementsByClassName('test')
// const p = document.getElementsByTagName('p')

// // const a = document.querySelector(p)

// const b = document.querySelectorAll('.test')

// let hi = document.getElementById('hi')
// let img = document.querySelector('img')\

// console.log(img.getAttribute('src'));

// let p = document.querySelector('#hi');
// p.innerHTML = "xayr";
// console.log(p.innerHTML);
// console.log(p.textContent);

const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

document.addEventListener('DOMContentLoaded', function () {
    const btn1 = document.getElementById('btn1');
    const colorDiv = document.getElementById('colorDiv')

    btn1.addEventListener('click', function () {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        colorDiv.style.backgroundColor = randomColor;
    });
});


//1--misol
// const students = [
//     { ism: "Ali", yosh: 20, baholari: [90, 85, 88] },
//     { ism: "Vali", yosh: 21, baholari: [85, 87, 90] },
//     { ism: "Sami", yosh: 22, baholari: [88, 92, 84] }
// ];
// function betterThanOther(students) {
//     let name = '';
//     let score = 0;
//     students.foreach(student => {
//         const baho = student.baholari;
//         const sum = baho.reduce((sum, baho) => sum + baho,) / baho.length;
//         if (sum > score) {
//             score = sum;
//             name = student.ism;
//         }
//     });
//     return name;
// }

// console.log(betterThanOther(students))


//2--misol
// const products = [
//     { nom: "Kompyuter", narx: 1000, mavjud: true },
//     { nom: "Telefon", narx: 700, mavjud: false },
//     { nom: "Planshet", narx: 500, mavjud: true },
//     { nom: "Monitor", narx: 300, mavjud: true },
// ];
// function expensive(arr) {
//     let qimmat = '';
//     arr.forEach(mahsulot => {
//         if (mahsulot.mavjud && (qimmat === null || mahsulot.narx > qimmat.narx)) {
//             qimmat = mahsulot;
//         }
//     });
//     return qimmat;
// }
// const soExpensive = expensive(arr);
// console.log(`${soExpensive.nom} (${soExpensive.narx}`);

