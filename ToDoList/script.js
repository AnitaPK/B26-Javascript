const tname = document.getElementById('InputTaskName').value;
const tDis = document.getElementById('InputTaskDiscri').value;

const tasks={
    cart:[],
        // Function to generate unique ID
        generateId: function() {
            return '_' + Math.random().toString(36).substring(2, 9);
          },
    showTasks:function(){  
        parentDiv.innerHTML='';
        this.cart.forEach(elmnObj=>{
            console.log(this.cart)
        const newcart = document.createElement('div');
        
        newcart.className = 'card w-75';
        newcart.innerHTML = `
                            <div class="card-body">
                            <h5 class="card-title">${elmnObj.taskName}</h5>
                            <p class="card-text">${elmnObj.Discription}</p>
                            <button class="btn btn-primary" onclick="tasks.updateTask('${elmnObj.id}', prompt('Enter new title:', '${elmnObj.taskName}'), prompt('Enter new description:', '${elmnObj.description}'))">Edit</button>
                            <button class="btn btn-primary" onclick="tasks.deleteTask(${elmnObj.id})">Delete</button>
                            </div> 
                            `
        parentDiv.appendChild(newcart);
        
                        })
    },
        // Function to add a new task
    addTask:function (tname,tDis){
        const task={
                     id: this.generateId(),
                    taskName:tname,
                    Discription:tDis
                }
        this.cart.push(task);
        // console.log(this.cart);
        this.showTasks();
    },
       // Function to get all tasks
       getAllTasks: function() {
        return this.tasks;
      },
        // Function to update a task
    updateTask: function(id,tname,tDis ) {
        const task = this.getTaskById(id);
        if (task) {
          task.taskName = tname;
          task.description = tDis;
          this.showTasks();
        } else {
          console.log('Task not found.');
        }
    },
        // Function to delete a task
    deleteTask: function(id) {
            const index = this.tasks.findIndex(task => task.id === id);
            if (index !== -1) {
              this.tasks.splice(index, 1);
              this.displayTasks();
            } else {
              console.log('Task not found.');
            }
          }

}

parentDiv = document.getElementById('parentTask');


// addNewTask(tname,tDis);

tasks.addTask('Task 1','Discription hgffd jhggf ');
tasks.addTask('Task 2','Discription hgffd jhggf ');


// addNewTask(tname,tDis);


// function addNewTask()

document.getElementById('newTask').addEventListener('click',addNewTask=()=>{
    const tname = document.getElementById('InputTaskName').value;
    const tDis = document.getElementById('InputTaskDiscri').value;
    tasks.addTask(tname,tDis);
})