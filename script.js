let ul = document.querySelector("ul");
let i = document.querySelector("#task");
let b = document.querySelector("button");
const pattern = /^[a-zA-Z]{3,}$/;

i.addEventListener('keyup', (e) => {
    if(pattern.test(e.target.value)){
        i.setAttribute('class', 'success');
    }
    else{
        i.setAttribute('class', 'error');
    }
})



b.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement("li")
    if(pattern.test(i.value)){
        li.textContent = i.value;
        i.value = null;
        i.removeAttribute('class', 'success');
        ul.prepend(li);  
    }
    else{
        alert("Enter proper list name");
    }
})


ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})

