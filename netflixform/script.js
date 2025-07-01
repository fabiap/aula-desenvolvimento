const emailInput = document.querySelector("#email");
//quarySelector é para selecionar um elemento do html
//a # é porque é id, se fosse classe seria .

/*const emailInput2 = document.getElementById(email)
getElementById é para selecionar um elemento específico*/

const senhaInput = document.querySelector("#password");
const entrarBotao = document.querySelector("#form-login-entrar");
const form = document.querySelector("#form")

entrarBotao.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailInput.value == ""){
        alert("ta errado não vai logar");
        return;
    }
    if (senhaInput.value ==""){
        senhaInput.style.background ="black";
        alert("ta vazio");
        setInterval( () =>{
            senhaInput.style.background ="white"
        }, 3000)
        return;
    }
    form.submit();
});
/*estou adicionando um evento e ele dispara através de um click, 
sua função é anônima(por causa do =>), 
o "e" é uma variavel que recebe a funçao,
a funçao é prevenir que o usuario execute e ação(entrar sem preencher)*/

//set é para fazer algo em um milesimo de tempo; interval = repete; timeout = executa só uma vez