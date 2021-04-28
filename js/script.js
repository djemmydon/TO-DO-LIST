

                //getElement


                let todoInput = document.getElementById( "todo-input");
                let todoBtn = document.getElementById( "todo-button");
                let todoList = document.getElementById( "todo-container");

                //addEventListener
                todoBtn.addEventListener("click", addTodo);
                todoList.addEventListener("click", deleteCheck)

                //function

                function addTodo (){
                    event.preventDefault(); 

                    //todoDiv
                    let todoDiv = document.createElement('div');
                    todoDiv.classList.add('todo');

                    //create LI
                    let newTodo = document.createElement('li');
                    newTodo.innerText = todoInput.value;
                    newTodo.classList.add ('todo-item');
                    todoDiv.appendChild(newTodo);

                    //completed button

            let completedButton = document.createElement('button');
            completedButton.innerHTML = "<h5>C</h5> ";
            completedButton.classList.add('complete-btn');
            todoDiv.appendChild(completedButton);


            //trash btn

            let trashButton = document.createElement('button');
            trashButton.innerHTML = " <h5>X</h5>";
            trashButton.classList.add( "trash-btn");
            todoDiv.appendChild(trashButton);



            todoList.appendChild(todoDiv)

                




                }

                function deleteCheck(e) {
                    let item = e.target;

                    if (item.classList[0] === 'trash-btn') {
                    let todo = item.parentElement;

                    todo.remove ();
                }
            // checked 

                    if (item.classList[0] === 'complete-btn') {
                        let todo =item.parentElement;
                        todo.classList.toggle("completed")
                    }
                        
                }



