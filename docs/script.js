const pcs = [
    {
        name: "PewDizinho-Notebook",
        machine: "Acer Nitro V 15",
        status: "on"
    }, {
        name: "PirateCoder13-NOTEBOOK",
        machine: "Acer Aspire 3 15",
        status: "off"
    }, {
        name: "Bagi-NOTEBOOK",
        machine: "Acer Eu-Nao-Sei-Modelos-De-Notebook",
        status: "on"
    }, {
        name: "duda-NOTEBOOK",
        machine: "Impala 1987 nitro rebaixado",
        status: "off"
    }, {
        name: "Audrey-NOTEBOOK",
        machine: "3 Gado e 1 trator",
        status: "404"
    },
]

document.addEventListener("DOMContentLoaded", () => {
    const listView = document.getElementById("listView");
    for (let pc of pcs) {

        const newDiv = document.createElement("div");
        newDiv.classList = "pc";

        const name = document.createElement("p");
        name.innerText = `Nome: ${pc.name}`
        newDiv.appendChild(name);

        const machine = document.createElement("p");
        machine.innerText = `Máquina: ${pc.machine} `
        newDiv.appendChild(machine);

        let types = {
            "on": "Online",
            "off": "Offline",
            "404": "Sem Acesso"
        }
        const status = document.createElement("p");

        status.innerText = `Status: ${types[pc.status]}`;
        newDiv.appendChild(status);

        if (newDiv.id != "404") {
            newDiv.id = pc.status;
        }
        listView.appendChild(newDiv);
    }

})