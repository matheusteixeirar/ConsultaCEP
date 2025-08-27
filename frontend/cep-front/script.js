function pegarCep() {
    var cep = document.getElementById("cepc").value;
    // console.log("CEP digitado:"+ cep);

    if (cepc.value.length !== 8) {
        document.getElementById("msg").style.display = "flex";
        document.getElementById("msg").textContent = "Digite um CEP válido";
        document.getElementById("form").style.display = "none";
        return;
    } else {
        document.getElementById("msg").style.display = "none";
    }

    fetch("http://localhost:8080/cep/" + cep) // conecta com o back end
    .then(response => response.json()) // converte a responsta em json
    .then(data => { // converte o json para um objeto (data) javascript, para ter acesso aos dados
        // console.log("JSON do backend: ", data);
        document.getElementById("form").style.display = "grid";
        document.getElementById("cep").value = data.cep || "";
        document.getElementById("logradouro").value = data.logradouro || "";
        document.getElementById("complemento").value = data.complemento || "";
        document.getElementById("unidade").value = data.unidade || "";
        document.getElementById("bairro").value = data.bairro || "";
        document.getElementById("localidade").value = data.localidade || "";
        document.getElementById("uf").value = data.uf || "";
        document.getElementById("estado").value = data.estado || "";
        document.getElementById("regiao").value = data.regiao || "";
        document.getElementById("ibge").value = data.ibge || "";
        document.getElementById("gia").value = data.gia || "";
        document.getElementById("ddd").value = data.ddd || "";
        document.getElementById("siafi").value = data.siafi || "";
    }) .catch(error => { 
        console.log(error);
    })
    
}