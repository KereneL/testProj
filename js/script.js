var inptTxt = document.getElementById("inputText");
var notesArr = [];

seed();
clearForm();

function seed() {
    for (let i = 0; i < 5; i++) {

        notesArr.push({
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit tincidunt sem vel aliquam. Nulla quam urna, convallis quis ultricies in, aliquet vitae urna. Sed ultrices, odio et dapibus luctus, quam massa tincidunt risus, ac condimentum urna diam eu ligula. Proin vulputate nunc sed massa malesuada, et lacinia sem malesuada. Curabitur ultrices at leo sit amet laoreet. Donec eget orci maximus, convallis nibh efficitur, gravida odio. Suspendisse a lorem leo. Sed accumsan erat et neque pulvinar, eu scelerisque magna euismod. Etiam quis quam ac nulla varius tristique. Aenean at orci consectetur, viverra eros quis, interdum erat. Aenean finibus, ipsum sit amet consectetur dapibus, arcu orci ullamcorper libero, vel mattis sem nunc nec urna. Sed sollicitudin eros vel faucibus rhoncus.`,
            dateObj: {
                date: "1992-02-24",
                time: "12:21"
            }
        });
    }
    saveArr();
    loadArr();
}

function saveArr() {
    localStorage.setItem("notes", JSON.stringify(notesArr));
}

function loadArr() {
    var tempLoaded = JSON.parse(localStorage.getItem("notes"));
    console.log(tempLoaded);

    tempLoaded.forEach(note => {
        addNewListItem(note.text, note.dateObj);
    });
}

function resetTime() {
    let now = new Date();
    document.getElementById("inputDate").value = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, 0)}-${(now.getDate()).toString().padStart(2, 0)}`;
    document.getElementById("inputTime").value = `${now.getHours().toString().padStart(2, 0)}:${now.getMinutes().toString().padStart(2, 0)}`;
}

function clearForm() {
    inptTxt.value = "";
    resetTime();
    inputText.focus();
}

function addNewItem() {
    var text = inptTxt.value;
    if (text == "") return;

    let datePicker = document.getElementById("inputDate").value;
    let timePicker = document.getElementById("inputTime").value;
    var dateObj = {
        date: datePicker,
        time: timePicker
    };

    notesArr.push({
        text: text,
        dateObj: dateObj
    });
    saveArr();

    addNewListItem(text, dateObj);
    clearForm();
}

function addNewListItem(text, date) {
    let listItem = document.createElement("div");
    listItem.setAttribute("class", "list-item col-md-4 col-sm-12");
    listItem.style["background-color"] = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, .1)`;

    let spanItem = document.createElement("span");
    spanItem.setAttribute("class", "delete-button");
    spanItem.setAttribute("onclick", "removeTarget()");
    spanItem.innerHTML = `<i class="far fa-trash-alt"></i>`;
    listItem.appendChild(spanItem);

    let txtWrapper = document.createElement("div");
    txtWrapper.setAttribute("class", "text-wrapper");
    let pText = document.createElement("p");
    pText.innerHTML = text;
    txtWrapper.appendChild(pText);
    listItem.appendChild(txtWrapper);

    let tsDiv = document.createElement("div");
    tsDiv.setAttribute("class", "time-stamp");

    let dateSpan = document.createElement("span");
    dateSpan.innerHTML = date.date; //`${date.date.getDate()}/${(date.date.getMonth() + 1)}/${date.date.getFullYear()}`;
    let timeSpan = document.createElement("span");
    timeSpan.innerHTML = date.time; //`${date.time.getHours()}:${date.time.getMinutes()}`;

    tsDiv.appendChild(dateSpan);
    tsDiv.appendChild(timeSpan);
    listItem.appendChild(tsDiv);

    document.getElementById("list").appendChild(listItem);
}

function removeTarget() {
    var item = event.currentTarget.parentNode;
    let itemIndex = Array.from(item.parentNode.children).indexOf(item);
    notesArr.splice(itemIndex, 1);
    saveArr();
    document.getElementById("list").removeChild(item);
}