// function personalizedHello(){
//     document.getElementById('personalizedMessage').innerHTML = '';                      // reset text in <p>
//     let userName = prompt("Veuillez entrer votre nom: ", "Saisir votre nom ici.");
//     let confirmName = prompt("Votre nom est: " + userName + " ? 1 pour Valider");
//     let validName = 0;
//     if (confirmName == 1) {
//         validName = userName;
//     } 
//     else {
//         delete userName;
//         validName = " ";
//     }
//             window.document.getElementById('personalizedMessage').innerHTML += "Hello " + validName;
//     }


let btnAdd = document.querySelector(".btnName");
btnAdd.addEventListener("click", (e)=>{               // (e)=> veut dire, entre la fonction suivante.
    let inputName = prompt("Entrez votre nom", "Entrez le ici");
    confirmName = confirm(inputName);

    if (confirmName) {
        alert("Hello " + inputName);
    }
    else {
        alert("error");
    }
})