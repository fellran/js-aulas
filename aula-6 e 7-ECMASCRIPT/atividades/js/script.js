// 1
const verificarPromise = new Promise((resolve, reject) => {
    let nome = "ADM"
    let senha = "ADM"

    if(nome == "ADM" && senha == "ADM"){
        resolve("Seja bem vindo administrador!");
    }
    else{
        reject("O usuario não é ADM! faça o login de maneira alternativa!");
    }
});

verificarPromise.then((x) => {
    alert("Usuario encontrado! Seja bem-vindo")
})

verificarPromise.catch((x) => {
    alert("Error! usuario não cadastrado!")
})
