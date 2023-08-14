let ul = document.querySelector("ul");
let i = document.querySelector(".Add_task");
let b = document.querySelector("button");

b.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement("li")
    li.textContent = i.value;
    i.value = null;
    ul.prepend(li);    
})


ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})