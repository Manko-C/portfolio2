let gomb = document.getElementById('gomb');
gomb.addEventListener('click', function(event) {
    event.preventDefault()
    let name = document.getElementById('nev').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('uzenet').value;
    
    if (name && email && message != "") {
        let fo = document.getElementById('fodiv');
        
        let div = document.createElement("div");
        div.classList.add('oszlop');

        let textDiv = document.createElement('div');
        let nameSpan = document.createElement('span');
        nameSpan.textContent = `Név: ${name}`;
        let emailSpan = document.createElement('span');
        emailSpan.textContent = `Email: ${email}`;
        let messageSpan = document.createElement('span');
        messageSpan.textContent = `Üzenet: ${message}`;

        textDiv.appendChild(nameSpan);
        textDiv.appendChild(document.createElement('br'));
        textDiv.appendChild(emailSpan);
        textDiv.appendChild(document.createElement('br'));
        textDiv.appendChild(messageSpan);
        

        div.appendChild(textDiv);
        
        fo.appendChild(div);

        document.getElementById('nev').value = '';
        document.getElementById('email').value = '';
        document.getElementById('uzenet').value = '';
    } else {
        alert('Kérlek tölts ki minden mezőt!');
    }
});
