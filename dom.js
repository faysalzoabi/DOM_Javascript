// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// TRAVERSING THE DOM //
// let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[0].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent= 'Hello 111'

//lastChild
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Helloooo'

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green'


// createElement

// create a div
// let newDiv = document.createElement('div');
// // add class
// newDiv.className = 'hello';
// // add id
// newDiv.id = 'helllo1';

// // add attribute
// newDiv.setAttribute('title', 'hello div');

// // create text node
// let newDivText = document.createTextNode('hello world');

// //add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container')
// let h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';
// console.log(newDiv)

// let newDiv = document.createElement('div');
// let newText = document.createTextNode('hey there');

// newDiv.appendChild(newText);
// newDiv.className = 'saaam';
// console.log('new', newDiv)
// let container = document.querySelector('.container');
// console.log('container', container)
// let h1 = document.querySelector('h1')
// console.log('h1', h1)
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';
// newDiv.style.color = 'red';


// EVENTS //

// let button = document.getElementById('button')
//                     .addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log('button clicked');
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = 'red';
//     // console.log(e);

//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // let output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+e.target.id+'</h3>';

//     // console.log(e.type);
//     // console.log(e.clientX);

//     // console.log(e.altKey)
//     // console.log(e.ctrlKey)
//     // console.log(e.shiftKey)
// }

// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);


// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent)

// let itemInput = document.querySelector('input[type="text"]')
// let form = document.querySelector('form');
// let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault();
//     console.log('event Type: ' + e.type);
    // console.log('event value ', e.target.value);
    // document.body.style.display = 'none'
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+ '</h3> <h3>MouseY: '+e.offsetY+ '</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
// }


// Example //

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

// Add item
// function addItem(e) {
//     e.preventDefault();
    
//     //get input value
//     let newItem = document.getElementById('item');
//     //create new li
//     let li = document.createElement('li')
//     // add class
//     li.className = 'list-group-item';
//     // add text node with input value
//     li.appendChild(document.createTextNode(newItem.value));

//     // create del button element
//     let deleteBtn = document.createElement('button')
//     // add classes to delete button
//     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//     // append text node
//     deleteBtn.appendChild(document.createTextNode('X'))

//     // append button to li
//     li.appendChild(deleteBtn);

//     //append li to list
//     itemList.appendChild(li)
// }

// // remove item
// function removeItem(e) {
//     if(e.target.classList.contains('delete')){
//         if(confirm('are you sure?')) {
//             let li = e.target.parentElement;
//             itemList.removeChild(li);
//         }
//     }
// }

// function filterItems(e){
//     // convert text to lowercase
//     let text = e.target.value.toLowerCase();
//     //get all lis
//     let items = itemList.getElementsByTagName('li');

//     //convert to an array
//     Array.from(items).forEach(function(item) {
//         let itemName = item.firstChild.textContent;
//         if(itemName.toLowerCase().includes(text)){
//             item.style.display = 'block'
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }






