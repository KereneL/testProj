var inptTxt = document.getElementById("inputText");
var notesArr = [];

seed();
clearForm();

function seed() {
    for (let i = 0; i < 5; i++) {

        notesArr.push({
            text: `${getText(i)}`,
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

function getText(i) {
    switch (i) {
        case 0:
            return (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia nisl urna, sagittis finibus ligula suscipit vitae. Sed at orci accumsan, dapibus lorem eu, volutpat arcu. Integer eros libero, egestas non hendrerit non, pharetra vestibulum lorem. Morbi faucibus vitae lectus a imperdiet. Sed hendrerit enim eros, ut mollis nunc congue eget. Sed placerat, urna at consectetur placerat, arcu eros vulputate turpis, vel sollicitudin justo mauris et neque. Cras condimentum nec justo sollicitudin molestie. Maecenas ultricies ornare tincidunt. Pellentesque dapibus bibendum nulla.`);
        case 1:
            return (`Nulla aliquam augue eu malesuada malesuada. Fusce magna sapien, euismod eu volutpat ut, semper eget odio. Nulla facilisi. Donec lectus quam, porta ac eros nec, euismod interdum est. Vestibulum nulla felis, elementum id velit ac, vestibulum pharetra felis. Mauris erat mi, dictum eget ligula vitae, aliquet facilisis est. Mauris porttitor ornare libero nec feugiat. Aenean ultrices nisi id nisl cursus, eget blandit ipsum placerat. Nullam scelerisque elit urna, a egestas nulla sodales vitae. Duis dignissim dapibus porta. Donec eget enim suscipit, efficitur elit id, scelerisque lectus. Phasellus tincidunt magna ac nunc dignissim, rutrum mattis nibh rhoncus. Nulla feugiat, ex ac luctus tempus, nisl nunc semper tellus, nec blandit ipsum eros vulputate leo. Donec congue posuere tincidunt. Aenean lorem lectus, ultricies sit amet ligula eu, sodales tincidunt eros.`);
        case 2:
            return (`Duis ullamcorper faucibus massa vel gravida. Phasellus odio erat, consequat et cursus in, sollicitudin non est. Donec accumsan, lacus ac viverra dictum, enim nisi mattis libero, et gravida magna felis et odio. Quisque tempus, massa ac vestibulum feugiat, neque urna aliquam odio, nec posuere arcu est sit amet purus. Duis nec pulvinar urna. Vestibulum justo turpis, finibus id lorem ac, tempor lobortis neque. In ullamcorper lorem elit, in efficitur felis pretium sit amet.`);
        case 3:
            return (`Sed nec leo in urna viverra condimentum. Vestibulum at quam sit amet diam faucibus tempus et quis mi. Aliquam molestie quis libero sit amet egestas. Donec dapibus mi ligula, eget placerat tortor condimentum nec. Donec sed justo magna. Nullam fermentum purus vestibulum, scelerisque lectus eget, gravida leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam ullamcorper arcu eget eros ullamcorper dictum sit amet vel ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus bibendum nunc a iaculis faucibus. Pellentesque id velit eu ipsum laoreet fermentum eu vitae quam. Praesent vitae euismod diam, vitae vulputate sapien. Morbi consequat blandit diam, non pellentesque odio lobortis a. Sed nec dignissim est.`);
        case 4:
            return (`Ut dapibus est non venenatis ultrices. Phasellus blandit augue diam, quis dictum felis congue a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras facilisis in nibh at euismod. Curabitur ultricies ut nisi ac bibendum. Vestibulum ac pulvinar odio, at maximus dui. Vestibulum sit amet enim hendrerit, euismod urna ac, varius diam. Curabitur maximus eleifend dolor, ac lacinia enim. Cras libero nibh, dapibus ac maximus et, semper sed mauris. Donec feugiat magna neque, sed finibus nibh tristique eget. Nullam ipsum ipsum, interdum ac lacus non, pellentesque pharetra augue. Donec eu est sed nibh laoreet efficitur sit amet quis sem.`);
    }
}