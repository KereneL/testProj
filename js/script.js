function createForm() {
    var form = document.createElement("form");
    form.setAttribute("id", "form");
    form.setAttribute("onsubmit", "addListItem(); return false;");

    var inputName = document.createElement("input");
    inputName.setAttribute("id", "text-id");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("name", "Name:");
    inputName.setAttribute("placeholder", "Enter Name...");
    form.appendChild(inputName);

    var inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "button");
    inputSubmit.setAttribute("onclick", "addListItem()");
    inputSubmit.setAttribute("value", "Submit");
    form.appendChild(inputSubmit);

    var inputCancel = document.createElement("input");
    inputCancel.setAttribute("type", "button");
    inputCancel.setAttribute("onclick", "removeForm()");
    inputCancel.setAttribute("value", "Cancel");
    form.appendChild(inputCancel);

    document.getElementById("container").appendChild(form);

    removeAddLink();  
    inputName.focus();
}

function removeForm() {
    var form = document.getElementById("form");
    form.parentNode.removeChild(form);
    createAddLink();
}

function createAddLink() {
    var linkCreateNew = document.createElement("a");
    linkCreateNew.setAttribute("href", "javascript:void(0)");
    linkCreateNew.setAttribute("onclick", "createForm()");
    linkCreateNew.innerHTML = "Create New...";
    document.getElementById("container").appendChild(linkCreateNew);
}

function removeAddLink(){
    var link = document.getElementsByTagName("a")[0];
    link.parentNode.removeChild(link);
}

function addListItem(){
    var text = document.getElementById("text-id").value;
    if (text.length > 0){
        var added = document.createElement("li");
        added.innerHTML = text;
        document.getElementById("list").appendChild(added);
        removeForm();
    }
}