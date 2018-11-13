// ------------------------
// Задача 7.1
// ------------------------
// Дано:
// HTML страница в которой есть только такой код
// <div>
//     <input id="todo-input" value="Placeholder" /> <button id="button-add">Add</button>
//     <p>ToDo List:</p>
//     <ol id="todo-list">
//         <li class="todo-item">
//             First todo
//             <span class="delete-button" onclick="removeItem(event)" title="Delete current item">x</span>
//         </li>
//     </ol>
// </div>

// Написать JavaScript код, который:
// 1. Найдет todo-input и получит значение введенное в поле
// 2. Найдет элемент li
// 3. Создаст deep клон элемента li
// 4. Поменять только текст у клона элемента li
var todo = document.getElementById("todo-input").value;
var li = document.getElementsByTagName("li")[0];
var clone = li.cloneNode(true);
clone.firstChild = "New text";

// ------------------------
// Задача 7.2
// ------------------------
// Дано:
// HTML страница в которой есть только такой код

// <div id="test" style="height: 50px;background-color: lightblue;">Test Div</div>
// <p>Расчетные стили для test div: <br><span id="output"></span></p>

// <script>
// function myFunction(){
//     var elem = document.getElementById("test");
//     var txt;
//     cssObj = window.getComputedStyle(elem)

//     for (i = 0; i < cssObj.length; i++) { 
//         cssObjProp = cssObj.item(i)
//         txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
//     }
//     document.getElementById("output").innerHTML = txt;
// }
// </script>


// Вопрос:
// Как получить расчетный стиль для фонового цвета у дива с id="test"?