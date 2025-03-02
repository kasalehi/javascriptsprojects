const link=document.querySelector(".button")
const inputText= document.querySelector("#add-book input")
const ul= document.querySelector('ul');
const spantag=`<span class="delete">Delete</span>`;
const hide = document.querySelector("#hide input");
const inputsearch=document.querySelector("#search-books input");


inputsearch.addEventListener('keyup', function(e){
    const searchValue = e.target.value.toLowerCase();
    const books = ul.querySelectorAll('li');
    if (searchValue !== '') {
        books.forEach(book => {
            const text = book.textContent.toLowerCase();
            if (text.includes(searchValue)) {
                book.style.display = 'block';
                } else {
                    book.style.display = 'none';
                    }
                    })}
            
})

hide.addEventListener('change', function(e){
    e.preventDefault();
    const hideInput = document.querySelector("#hide input");
    if(hideInput.checked){
        ul.style.display="none";


    } else{
        ul.style.display="block";
    }})

link.addEventListener('click', function(e){
    
    const spane2= document.createElement('span');
    spane2.className='name';
    spane2.innerHTML=inputText.value;
    const li= document.createElement('li');
    li.appendChild(spane2);
    li.innerHTML+=spantag;
    ul.appendChild(li);
    savetolocalstorage(inputText.value);
    inputText.value='';
    e.preventDefault();
})
document.addEventListener('DOMContentLoaded', function(e){
    let tasks;
   if(localStorage.getItem('tasks')===null){
    tasks=[];
   }
   else{
    tasks= localStorage.getItem('tasks').split(",");
   }
   tasks.forEach(function(task){
    const li=document.createElement('li');
    const spane2=document.createElement('span');
    spane2.className='name';
    spane2.innerHTML=task;
   })})
    
ul.addEventListener('click', function(e){
    if(e.target.className==='delete'){
        e.target.parentNode.remove();
        deletetaskfromlocalstorage(e.target.parentNode.firstChild.textContent);
        }
        }
)

function deletetaskfromlocalstorage(item){
    let tasks=localStorage.getItem('tasks').split(",");
    tasks= tasks.filter(function(task){
        return task!==item
        })
        localStorage.setItem('tasks',tasks.join(","));

} 





function savetolocalstorage(task){
   let tasks;
   if(localStorage.getItem('tasks')===null){
    tasks=[];
   }
   else{
    tasks= localStorage.getItem('tasks').split(",");
   }
   tasks.push(task);
   localStorage.setItem('tasks',tasks);
}


