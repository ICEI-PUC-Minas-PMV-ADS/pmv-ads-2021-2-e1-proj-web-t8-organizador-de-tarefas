function showModal(){
    document.getElementById('modal-task').style.top = '0';
}

function fechaModal(){
    document.getElementById('modal-task').style.top = '-100%';
}

showLista()
var porcentagem;

document.querySelector('#addTask').onclick = function(){
   
    if(document.querySelector('#newTask').value.length == 0){
        alert("Adicione uma tarefa!")
    }else{
        let statusTask = document.getElementById('status-task').value

        let dataTask = document.getElementById('data-task').value
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
            let contList = tasks.length
            let contTaskDone = 0
            console.log("CONTLIST")
            console.log(contList)
           
            tasks.push(infoTask)
            localStorage.setItem('localItem', JSON.stringify(tasks))
            for(let i=0; i<=contList; i++){
                if(tasks[i].status == 'Concluído'){
                    contTaskDone = contTaskDone + 1
                }
            }
            console.log("CONTTASKDONE")
            console.log(contTaskDone)
            porcentagem = Math.ceil((100*contTaskDone) / (contList+1))
            console.log("PORCENTAGEEEEM",porcentagem)
            progressBar.setPercent(porcentagem);
            localStorage.setItem('porcentagem', JSON.stringify(porcentagem))

        }   
        showLista()
        fechaModal()
    }
}
var progressBar;
window.onload = function(){
    let pctgem = JSON.parse(localStorage.getItem('porcentagem'))
    console.log("DENTROOOO")
    console.log(porcentagem)
    progressBar = new ProgressBar("my-progressbar", {'width':'30%', 'height':'15px'});
    progressBar.setPercent(pctgem);
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
    tasks.splice(index,1)
    localStorage.setItem('localItem', JSON.stringify(tasks))
    showLista()
}

document.querySelector('#share').onclick = function(){
    document.getElementById('div-compartilhar').style.display ='block';
    let link = window.location.href
    document.getElementById('compartilhar').value = link;
    
}

document.querySelector('#copy').onclick = function(){
    let link = window.location.href
    document.getElementById('compartilhar').value = link;
    document.getElementById('compartilhar').select();
    document.execCommand('copy')
    alert('Link copiado com sucesso!')
    document.getElementById('div-compartilhar').style.display ='none';
}