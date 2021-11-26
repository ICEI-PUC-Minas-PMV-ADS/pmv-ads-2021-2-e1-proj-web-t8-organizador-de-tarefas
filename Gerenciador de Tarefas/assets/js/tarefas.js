function showModal(){
    document.getElementById('modal-task').style.top = '0';
}

function fechaModal(){
    document.getElementById('modal-task').style.top = '-100%';
}

showLista()

document.querySelector('#addTask').onclick = function(){
   
    if(document.querySelector('#newTask').value.length == 0){
        alert("Adicione uma tarefa!")
    }else{
        let statusTask = document.getElementById('status-task').value
        console.log(statusTask)

        let dataTask = document.getElementById('data-task').value
        console.log(dataTask)
        if(document.querySelector('#newTask').value != 0){
            let localItens = JSON.parse(localStorage.getItem('localItem'))
            if(localItens === null){
                tasks = []
            }else{
                tasks = localItens;
                localStorage.setItem('localItem', "[]")
            }

            let infoTask = {
                nome: document.querySelector('#newTask').value,
                status: statusTask,
                data: dataTask
            }
            tasks.push(infoTask)
            localStorage.setItem('localItem', JSON.stringify(tasks))
        }   
        showLista()
        fechaModal()
    }
}

function showLista(){
    let localItens = JSON.parse(localStorage.getItem('localItem'))
    let mostraLista = document.querySelector('#table-task')
    let output = '';
    if(localItens === null){
        tasks = []
    }else{
        tasks = localItens;
    }    
    tasks.forEach((data, index) => {
        output += `
            <tr>
                <td>
                    ${data.nome}
                </td>
                <td>
                    ${data.status}
                </td>
                <td>
                    ${data.data}
                </td>
                <td>
                    <img onclick="deleteTask(${index})" class="delete-task" src="assets/img/trash.png">
                </td>
            </tr>
        `;
    });
    mostraLista.innerHTML = output;    
}

function deleteTask(index){
    let localItens = JSON.parse(localStorage.getItem('localItem'))
    tasks.splice(index,1)
    localStorage.setItem('localItem', JSON.stringify(tasks))
    showLista()
}

document.querySelector('#share').onclick = function(){
    document.getElementById('div-compartilhar').style.display ='block';
}

document.querySelector('#copy').onclick = function(){
    let link = window.location.href
    document.getElementById('compartilhar').value = link;
    document.getElementById('compartilhar').select();
    document.execCommand('copy')
    alert('Link copiado com sucesso!')
    document.getElementById('div-compartilhar').style.display ='none';
}
