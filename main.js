let tablica = new Array()
function changeImie() {
    let imie = document.getElementById('inp1').value
    
    if(imie.length < 3) {
        document.getElementById('p1').style = 'visibility: visible'
    } else {
        document.getElementById('p1').style = 'visibility: hidden'
    }
    
}
function changeNazwisko() {
    let nazwisko = document.getElementById('inp2').value
    if(nazwisko.length < 2) {
        document.getElementById('p2').style = 'visibility: visible'
    } else {
        document.getElementById('p2').style = 'visibility: hidden'
    }
}

function changeEmail(val) {
    let xd = val.split('')
    const isEmail = xd.some(item => item === '@')
    if(isEmail == false) {
        document.getElementById('p3').style = 'visibility: visible'
    } else {
        document.getElementById('p3').style = 'visibility: hidden'
    }
}

function changeTelefon(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            document.getElementById('p4').style = 'visibility: hidden'
        } else {
            document.getElementById('p4').style = 'visibility: visible'
        }
    })
}
function changeWiadomosc() {
    let wiadomosc = document.getElementById('inp5').value
    if(wiadomosc.length < 10) {
        document.getElementById('p5').style = 'visibility: visible'
    } else {
        document.getElementById('p5').style = "visibility: hidden"
    }
}
function getImie() {
    let imie = document.getElementById('inp1').value
    if(imie.length < 3) {
        alert("Imię nie może być krótsze niż 3 znaki.")
        return
    } else {
        tablica.push("Imię:", imie) 
    }
}
function getNazwisko() {
    let nazwisko = document.getElementById('inp2').value
    if(nazwisko.length < 2) {
        alert("Nazwisko nie może być krótsze niż 2 znaki.")
    } else {
        tablica.push("Nazwisko:", nazwisko)
    }
}
function getEmail(val) {
    let email = document.getElementById('inp3').value
    let xd = val.split('')
    const isEmail = xd.find(item => item == '@')
    if(isEmail == false) {
        alert('Adres e-mail musi posiadać "@" w sobie.')
    } else {
        tablica.push("Email:", email)
    }
}
function getTelefon(val) {
    let telefon = document.getElementById('inp4').value
    let xd = val.split('')
    const isTelefon = xd.filter(item => item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') 
        if(isTelefon === false) {
            alert('Numer telefonu musi mieć cyfry')
        }
        else {
            tablica.push("Telefon:", telefon)
        }
    
}
function getWiadomosc() {
    let wiadomosc = document.getElementById('inp5').value
    if(wiadomosc.length < 10) {
        alert('Wiadomość do sprzedającego nie może być krótsza niż 10 znaków.')
    } else {
        tablica.push("Wiadomość do sprzedającego:", wiadomosc)
    }
   
}

function xd(value) {
    getImie(), getNazwisko(), getEmail(value), getTelefon(value), getWiadomosc()
    console.log(tablica)
    tablica = []
}

let food = [
    {
        value: 1,
        name: "kebab"
    },
    {
        value: 2,
        name: "pizza"
    }
]

function xd2() {
    for(let i = 1; i <= 5; i++) {
        console.log(food.value)
    }
}