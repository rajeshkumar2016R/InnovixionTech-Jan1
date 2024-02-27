let input = document.querySelector('#Input');
let listContainer = document.querySelector('.list-container');

function addTask() {
    if (input.value === '') {
        alert("Enter Your Task!!")
    } else {
        let list = document.createElement('li');
        list.innerHTML = input.value;
        listContainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        list.appendChild(span);
    }
    input.value = '';
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('Checked');
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();