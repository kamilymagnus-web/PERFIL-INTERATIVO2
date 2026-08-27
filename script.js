const botao = document.getElementById("atualizar");
const camponome = document.getElementById("novonome");
const nomeperfil = document.getElementById("nomeperfil");
const profissao = document.getElementById("profissao");
const perfil = document.querySelector(".perfil");
const botaotema = document.getElementById("tema");

botao.addEventListener("click", function() {
    nomeperfil.textContent = camponome.value;
    profissao.textContent = "Desenvolvedor(a) Web ";
    perfil.classList.add("atualizado");
});

botaotema.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

});

campo.addEventListener (
    "focus", function() {
        campo.classList.add("ativo");
    }
);

campo.addEventListener (
    "blur", function() {
        campo.classList.remove("ativo");
    }
);