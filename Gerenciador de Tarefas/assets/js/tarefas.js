function showModal(){
    document.getElementById('modal-task').style.top = '0';
}

function fechaModal(){
    document.getElementById('modal-task').style.top = '-100%';
}

document.querySelector('#addTask').onclick = function(){
    if(document.querySelector('#newTask').value.length == 0){
        alert("Adicione uma tarefa!")
    }else{
        document.querySelector('#table-task').innerHTML 
        += `
            <tr>
                <td>
                    ${document.querySelector('#newTask').value}
                </td>
                <td>
                    ${document.querySelector('#status-task').value}
                </td>
                <td>
                    <img class="delete-task" src="assets/img/trash.png">
                </td>
                <td>
                <img onclick="showModal()" src="assets/img/write (1).png">
            </td>
            </tr>
            `;
        fechaModal()
        // let taskAtual = document.querySelectorAll('.delete-task');
        // for(i=0;i<taskAtual.length;i++){
        //     taskAtual[i].onclick = function(){
        //         this.parentNode.remove();
        //     }
        // }
    }
}