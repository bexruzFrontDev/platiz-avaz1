let sana = new Date()

console.log(
    `Bugungi sana: ${sana.getDate()}.${sana.getMonth() + 1
    }.${sana.getFullYear()}   Vaqt: ${sana.getHours()}:${sana.getMinutes()}:${sana.getSeconds()}`
);

let h1 = document.querySelector('.h1')

let h11 = document.querySelector('.h11')

h1.innerHTML = `Bugungi sana: ${sana.getDate()}.${sana.getMonth() + 1
    }.${sana.getFullYear()}`

h11.innerHTML = ` Vaqt: ${sana.getHours()}:${sana.getMinutes()}:${sana.getSeconds()}`