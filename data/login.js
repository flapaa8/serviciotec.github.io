var alerta = document.getElementById("alert-container")
document.getElementById('login')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        var user = document.getElementById('user').value,
         pw = document.getElementById('password').value;
       console.log(user, pw);
       if(user==="ilka"&& pw==="1"){
           location.href = ("./menuUI.html");
       }
       else{
           alerta.innerHTML = `
           <h4 class="alerta"> Usuario y/o Contraseña incorrectos </h4>
           `;
           setTimeout(function () {
            document.querySelector('.alerta').remove();
        }, 3000);
       }
    }) 