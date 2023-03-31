var form = document.getElementById('addDetails');
var userAppo = document.getElementById('userApp')
var uniqueID = document.getElementById('myEmail').value;

form.addEventListener('submit', storeItems)
userAppo.addEventListener('click', removeApp)

function storeItems(e) {
    e.preventDefault();

    var uniqueID = document.getElementById('myEmail').value; //DOM 12/17

    var infoObj = {
        name: document.getElementById('myName').value,
        email: document.getElementById('myEmail').value,
        amount: document.getElementById('myAmount').value,
        description: document.getElementById('myDescription').value,
        category: document.getElementById('myCategory').value,
    }
    var sumBtn = document.getElementById('submitBtn')
    sumBtn.className = "btn"
    sumBtn.style.backgroundColor = "green"
    sumBtn.style.color = "white"

    var storeObj = JSON.stringify(infoObj);

    localStorage.setItem(uniqueID, storeObj)
    addApp(e);

    // var receiveObj = JSON.parse(localStorage.getItem(uniqueID))
    // console.log(receiveObj)

}
function addApp(e) {
    e.preventDefault();
    var uniqueID = document.getElementById('myEmail').value;
    if (document.getElementById('noAppDef'))
        userAppo.removeChild(document.getElementById('noAppDef'));

    var appDate = "Amount  " + document.getElementById('myAmount').value + " Description " + document.getElementById('myDescription').value + " Catergory " + document.getElementById('myCategory').value
    var newApp = document.createElement('li')
    newApp.id = uniqueID
    newApp.className = "list-group-item"
    newApp.style.fontWeight = 'bold'
    newApp.appendChild(document.createTextNode(appDate))

    console.log(newApp)

    var deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    newApp.appendChild(deleteBtn)

    var editBtn = document.createElement('button');
    editBtn.className = "btn btn-primary  btn-sm float-right edit";
    editBtn.style.marginRight = '10px'
    editBtn.appendChild(document.createTextNode("Edit"));
    newApp.appendChild(editBtn)

    userAppo.appendChild(newApp)
    document.getElementById('addDetails').reset();
}
function removeApp(e) {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('are you sure' + e.target.id + "!")) {
            var li = e.target.parentElement;
            userAppo.removeChild(li);
            console.log("the id is" + li.id)
            localStorage.removeItem(li.id)
        }
    }
    else (e.target.classList.contains('edit'))
    {
        if (confirm('are you sure' + e.target.id + "!")) {
            var li = e.target.parentElement;
            userAppo.removeChild(li);
            console.log("the id is" + li.id)
            // localStorage.removeItem(li.id)

            var receiveObj = JSON.parse(localStorage.getItem(li.id))
            console.log(receiveObj)
            document.getElementById('myName').value = receiveObj.name;
            document.getElementById('myEmail').value = receiveObj.email;

            document.getElementById('myAmount').value = receiveObj.amount;
            document.getElementById('myDescription').value = receiveObj.description;
            document.getElementById('myCategory').value = receiveObj.category;
        }
    }


}
