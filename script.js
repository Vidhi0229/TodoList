let form = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");


const generateTemplate = todo => {
    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <span class="material-symbols-outlined delete">delete</span>
        </li>`;
        list.innerHTML += html; 
        //form.Add.value = null;
};

form.addEventListener("submit", e => {
    e.preventDefault();
    const todo = form.Add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        form.reset();
    }
})

list.addEventListener("click", e => {
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

    Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
}

search.addEventListener("keyup", e => {
    if(e.code === "Enter"){
        e.preventDefault();
    }
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})




// let ul = document.querySelector("ul");
// let i = document.querySelector("#task");
// let b = document.querySelector("button");
// const pattern = /^[a-zA-Z]{3,}$/;

// i.addEventListener('keyup', (e) => {
//     if(pattern.test(e.target.value)){
//         i.setAttribute('class', 'success');
//     }
//     else{
//         i.setAttribute('class', 'error');
//     }
// })



// b.addEventListener('click', (e) => {
//     e.preventDefault();
//     const li = document.createElement("li")
//     if(pattern.test(i.value)){
//         li.textContent = i.value;
//         i.value = null;
//         i.removeAttribute('class', 'success');
//         i.removeAttribute('class', 'error');
//         ul.prepend(li);  
//     }
//     else{
//         alert("Enter proper list name");
//     }
// })


// ul.addEventListener('click', e => {
//     if(e.target.tagName === 'LI'){
//         e.target.remove();
//     }
// })

