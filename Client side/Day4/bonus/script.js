let name ,year,age;
name = prompt('enter yor name','name')
year = prompt('inter your birth year',2000)
while (year>2010){
    year = prompt('inter your birth year',2000)
}

var target = document.getElementById("userData");

// Replace the content
target.innerHTML = `<h3>Name: </h3><p>${name}</p><br> <h3>Year: </h3><p>${year}</p><br>  <h3>age:</h3> <p>${2024-year}</p> `;


function welcome (){
    for(let i=1;i<=6;i++){
        document.write(`<h${i}>welcome to my page</h${i}>`)
    }
}
// welcome();

let skills = ['html','css','js','nodejs']
var skillsContainer = document.getElementById("skills");

for(let item of skills){
    console.log(item)
    const skill = document.createElement("div");
    skill.textContent = item;
    const btn = document.createElement("button");
    btn.textContent = 'X';
    btn.addEventListener("click", () => {
        alert("Button was clicked!");
    });
    skill.appendChild(btn);
    // skill.textContent = `<p>${item}</p> <button>X</button>`;
    skillsContainer.appendChild(skill);
}

