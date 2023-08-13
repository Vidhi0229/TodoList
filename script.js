let ul = document.querySelector("ul");
let i = document.querySelector(".Add_task");
let b = document.querySelector("button");

b.addEventListener('click', () => {
    const li = document.createElement("li")
    li.textContent = i.value;
    ul.prepend(li);    
})

// let li = document.querySelectorAll("li");

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})