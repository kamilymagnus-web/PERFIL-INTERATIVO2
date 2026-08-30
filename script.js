const botao = document.getElementById("atualizar");
const camponome = document.getElementById("novonome");
const nomeperfil = document.getElementById("nomeperfil");
const profissao = document.getElementById("profissao");
const perfil = document.querySelector(".perfil");
const botaotema = document.getElementById("tema");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
        if (camponome.value === "") {
            mensagem.textContent = "Por favor, digite um nome antes de atualizar.";
            return;
        }
        
    nomeperfil.textContent = camponome.value;
        if (profissao.textContent === "Estudante") {
            profissao.textContent = "Desenvolvedor(a) Web";
        } else {
            profissao.textContent = "Estudante";
        }

        perfil.classList.add("atualizado");
        mensagem.textContent = "Perfil atualizado com sucesso!";
    }
);
botaotema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

});

camponome.addEventListener (
    "input", function() {
        nomeperfil.textContent = camponome.value;
})

camponome.addEventListener(
    "focus", function() {
    camponome.classList.add("campoativo");
});
camponome.addEventListener(
    "blur", function() {
    camponome.classList.remove("campoativo");
});