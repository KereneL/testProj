// on page load - call createAddLink();
window.onload = function () {
    createAddLink();
    seed();

};

function seed() {
    var arr = ["🐶🐱🐷🦆", "Hello World.js", "🏈🏐🏀⚽", "🚗🚛🚙🚓"];
    for (let i = 0; i < arr.length; i++) {
        addListItem(arr[i]);
    }
}

function createForm() {
    //create <form> element
    //set id = form, and class as style_1
    //onsubmit = extractTextFromForm() and "return false;" to avoid page refreshing
    //apply class for styling
    //disable auto-complete, just because
    var form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("onsubmit", "extractTextFromForm(); return false;");
    form.setAttribute("class", "style_1");
    form.setAttribute("autocomplete", "off");

    //create <input> element of type text
    //set id = text-id
    //set type, name and placeholder
    //add element as child to form
    var inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "text-id");
    inputName.setAttribute("name", "name");
    inputName.setAttribute("placeholder", "Enter Text...");
    form.appendChild(inputName);

    //create <input> element of type button
    //set onclick event - extractTextFromForm()
    //set button text = Submit
    //add element as child to form
    var inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "button");
    inputSubmit.setAttribute("onclick", "extractTextFromForm();");
    inputSubmit.setAttribute("value", "Add");
    form.appendChild(inputSubmit);

    //create <input> element of type button
    //set onclick event - removeForm()
    //set button text = Cancel
    //add element as child to form
    var inputCancel = document.createElement("input");
    inputCancel.setAttribute("type", "button");
    inputCancel.setAttribute("onclick", "removeForm()");
    inputCancel.setAttribute("value", "Cancel");
    form.appendChild(inputCancel);

    //add form as a child to 'container' (which is present in HTML)
    document.getElementById("container").appendChild(form);

    //when the form opens, remove the link
    removeAddLink();
    //set focus to the name field
    inputName.focus();
}

function removeForm() {
    //select form element
    //remove element from parent element
    //create the "add new" link again using another function
    var form = document.getElementById("form");
    form.parentNode.removeChild(form);
    createAddLink();
}

function createAddLink() {
    //create anchor (<div>) element
    //add href attribute as "javascript:void(0)" so the page won't reload on click
    //add onclick event - createForm()
    //add class - button
    //add the label
    var linkCreateNew = document.createElement("div");
    linkCreateNew.setAttribute("href", "javascript:void(0)");
    linkCreateNew.setAttribute("onclick", "createForm()");
    linkCreateNew.setAttribute("class", "style_1");
    linkCreateNew.innerHTML = "Add More...";

    //create a new <div> element
    //add the <a> element linkCreateNew to that <div>
    //add the <div> element newDiv to our container
    var newDiv = document.createElement("div");
    newDiv.appendChild(linkCreateNew);
    document.getElementById("container").appendChild(newDiv);

    //set focus to link
    linkCreateNew.focus();
}

function removeAddLink() {
    //select elements with "style_1" class
    //select elements parent (which is a <div>)
    //remove element from parent element
    var link = document.getElementsByClassName("style_1")[0];
    var div = link.parentNode;
    div.parentNode.removeChild(div);
}

function extractTextFromForm() {
    //get the text from the form's textbox
    //if it's not empty -
    //call addListItem() with 'text' as an argument
    var text = document.getElementById("text-id").value;
    if (text.length > 0) {
        addListItem(text);
    }
}

function addListItem(text) {
    //add a new <li> element
    //add the text to that <li>

    //create <span> 
    //apply "del" class attribute
    //apply "removeTarget()" call onclick event
    //add innerHTML - an X emoji

    //add <li> to list (where id=list)
    let listItem = document.createElement("li");

    let pText = document.createElement("p");
    pText.innerHTML = text;
    listItem.appendChild(pText);

    let spanItem = document.createElement("span");
    spanItem.setAttribute("class", "delete-button");
    spanItem.setAttribute("onclick", "removeTarget()");
    spanItem.innerHTML = `&#215;`;
    listItem.appendChild(spanItem);

    document.getElementById("list").appendChild(listItem);
}

function removeTarget() {
    //get the parent of the target (X button)
    //remove parent element
    var item = event.target.parentNode;
    document.getElementById("list").removeChild(item);
}