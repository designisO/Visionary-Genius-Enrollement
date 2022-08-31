var selectedRow = null;

// Alerts

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}


// Clearing All Fields

function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#studentNo").value = "";
}


// Adding Student Enrollment

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get Values

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const studentNo = document.querySelector("#studentNo").value;

    // validate info

    if (firstName == "" || lastName == "" || studentNo == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${studentNo}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Visionary Student Added", "success");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = studentNo;
            selectedRow = null;
            showAlert("Visionary Student Info Edited", "info");
        }

        clearFields();
    }
});


// Editing Enrollment Data

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#studentNo").value = selectedRow.children[2].textContent;
    }

});


// Deleting Enrollment

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Visionary Student Data Deleted", "danger");
    }
});

