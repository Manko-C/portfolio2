    let gomb = document.getElementById('gomb');
    gomb.addEventListener('click', function(){
        let name = document.getElementById('nev').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('uzenet').value;
        let kep = document.getElementById('mango');
        let fo = document.getElementById('fodiv');
        let div = document.createElement("div");
        div.appendChild(kep)
        div.appendChild(name, email, message)
        document.body.appendChild(fo)
    })

