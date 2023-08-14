let ul = document.querySelector("ul");
let i = document.querySelector(".Add_task");
let b = document.querySelector("button");
const Vidhi_name = 'Vidhi';
const pattern = /^[a-z]{3,}$/;
console.log(pattern.test(Vidhi_name));

b.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement("li")
    if(pattern.test(i.value)){
        li.textContent = i.value;
        i.value = null;
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

// const Vidhi_name = 'Vidhi';
// const pattern = /[a-z]{6,}/;
// console.log(pattern.test(Vidhi_name));