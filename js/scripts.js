function validateForm() {
    var x = document.forms["Form1"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}