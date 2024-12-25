class taskManager{
    // private
    #tasks=[];

    constructor(){
        this.taskListElement=document.getElementById("taskList");
        this.loadTasks();
    }

    loadTasks(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","./todo.json",true);
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4&&xhr.status==200){
                var data=JSON.parse(xhr.response.trim());
                this.#tasks=this.getSavedTasks().concat(data);

                this.renderTask();
                // console.log(data);
                
            }
        }
        xhr.send();
    }

    saveTasks(){
        localStorage.setItem("tasks",JSON.stringify(this.#tasks))
    }

    getSavedTasks(){
    // return  (localStorage.getItem("tasks"))?JSON.parse(localStorage.getItem("tasks")):[];
    var returnedData=localStorage.getItem("tasks")
    return  returnedData?JSON.parse(returnedData):[];

    }

    addTasks(task){
        this.#tasks.push(task);
        this.saveTasks();
        this.renderTask();

    }

    // delete task
    deleteTask(taskid) {
        this.#tasks=this.#tasks.filter(task=>task.id !== taskid);
        this.saveTasks();
        this.renderTask();

        

    }
    toggleCompleted(taskID){

        var task=this.#tasks.find(task => task.id==taskID);
        if(task){
            task.completed=!task.completed;
            this.saveTasks();
            this.renderTask();
        }


    }

    renderTask(){

        this.taskListElement.innerHTML="";

        this.#tasks.forEach(task=>{
            var listItem=document.createElement("li");
            // listItem.innerHTML="hello"+task.title+
            listItem.className=task.completed?"completed":''
            listItem.innerHTML=`
            <span>${task.title}</span>
            <div>
            <button class="delete" onclick="taskList.deleteTask(${task.id})">Delete</button>
            <button onclick="taskList.toggleCompleted(${task.id})">
            ${task.completed?"undo" : "complete"}
            </button>
            </div>`;
            this.taskListElement.appendChild(listItem)
        }


        );

    }

    increID(){
        // this.renderTask();
       return this.#tasks.length+1
    }


}

// object
var taskList=new taskManager();

document.getElementById("taskForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    var inputValue=document.getElementById("taskInput");
    let taskData={
        id:Date.now(),
        title:inputValue.value,
        completed:false
    }
    
    taskList.addTasks(taskData);
    // console.log(taskData);
    inputValue.value="";
})