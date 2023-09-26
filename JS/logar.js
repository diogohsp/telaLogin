const btn = document.querySelector('#send');
const user = document.querySelector('#user');
const senha = document.querySelector('#senha');

btn.addEventListener("click", function(e) {
  
    e.preventDefault();
    
    if(user.value == 'admin' && senha.value == '1234'){
        window.location.href = "logado.html";
    }else{
        alert("Usuario ou senha incorretos!");
    }

});

