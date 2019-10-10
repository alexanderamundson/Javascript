const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById('filter');

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);



function addItem(event) {
    event.preventDefault();
    //get input value
    let newItem = document.getElementById("item").value;
    if (!newItem) { //if user submits empty string as item
        alert('Can not submit empty item');
        return;
    }
    //create new li
    let li = document.createElement('li');
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete button element
    let delBtn = document.createElement('button');
    //add classes to delete button
    delBtn.className ='btn btn-danger btn-sm float-right delete';
    //append text node
    delBtn.appendChild(document.createTextNode('X'));
    //append delete button to li
    li.appendChild(delBtn);
    //append li to list
    itemList.appendChild(li);
}

function removeItem(event) {   
    if (event.target.classList.contains('delete')) {
        if (confirm("Are You Sure?")) {
            let li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
};

function filterItems(event) {
    //convert input to lowercase
    let text = event.target.value.toLowerCase();
    //get all lis
    let items = itemList.getElementsByTagName('li');
    //convert items html collection to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        console.log(`li display = ${item.style.display}*`);
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';//Hide elements that don't match 'text'
        }
    });
}