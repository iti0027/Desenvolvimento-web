const nameReceita = document.getElementById('nameInput');
const valueReceita = document.getElementById('valueInput');
const newValueReceita = document.getElementById('newValueInput');
const olList = document.getElementById('olList');
const butao = document.getElementById('buttonInput');

const url = "https://parseapi.back4app.com/classes/MyCustomClassName";
const headers = {
    "X-Parse-Application-Id": "cwfcDMDbMU1WbLgIIPxAvXkkP8i5lOJPm8B9a6Pm",
    "X-Parse-REST-API-Key": "1SeDEN0lgPeY7ldWB5NfYk0p0If2QEenhBLHoOry",
};
const headersJson = {
    ...headers,
    "Content-Type": "application/json"
};

const showList = async (data) =>{
    olList.innerHTML = "";
    const resultData = data.results;

    resultData.forEach((result) => {
        const text = document.createTextNode(`${result.descricao} = ${result.valor}`);
        let li = document.createElement("li");

        let btAdd = document.createElement("button");
        btAdd.innerHTML = "Adicionar";

        let btRemove = document.createElement("button");
        btRemove.innerHTML = "Remover";

        li.appendChild(text);
        li.appendChild(btAdd);
        li.appendChild(btRemove);
        olList.appendChild(li);

        btRemove.onclick = () => removeDespesa(result);
    })
}

const addItem = async () => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: headersJson
        }); if (!response.ok){
            alert("Problem to servidor acess" + response.status);
            throw new Error ("Problem found" + response.status);
        } 
        const data = await response.json()
        console.log(data);
        showList(data);
    } catch (error) {
        console.log(error);
    }
}

butao.addEventList ("click", async () =>{
    let nameR = nameReceita.value.trim();
    let valueR = valueReceita.value();

    if (nameR === ""){
        alert("Por favor, preencha o campo com o nome do ite,.")
    } else if (valueR === ""){
        alert("Por favor, o campo com o valor do item.")
    } else{
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headersJson,
                body: JSON.stringify({
                    descricao: nameR,
                    valor: parseFloat(valueR),
                }) 
            }) 
            if (!response.ok){
                alert("Problem to servidor acess" + response.status);
                const errorData = await response.json();
                console.log("Erro detalhado", errorData);
                throw new Error ("Problem found" + response.status);
            }

            addItem();
        } catch (error) {
            console.log(error)
        }
    }
})

const removeDespesa = async (despesa) =>{
    try {
       const response = await fetch(`${url}/${despesa.objectId}`, {
        method: "DELETE",
        headers: headersJson,
       });

       if (!response.ok){
        alert("Problem to servidor acess" + response.status);
        throw new Error ("Problem found" + response.status);
       }

       addItem();
    } catch (error) {
        console.log(error);
    }
}

const  updateItem = async (despesa) =>{
    let valueR = parseFloat(valueReceita.value);
    nameR.disable = true;
    if (isNaN(valueR) || valueR === 0){
        alert("Por favor, insira um valor válido para atualizar.")
        return;
    }

    try {
        const response = await fetch(`${url}/ ${despesa.objectId}`, {
            method: "PUT",
            headers: headersJson,
            body: JSON.stringify({valor:valueR})
        })
        if (!response.ok){
            alert("Problem to servidor acess" + response.status);
            const errorData = await response.json();
            throw new Error('Problem found' + response.status);
        }

        addItem();
    } catch (error) {
        console.log(error);
    }
}