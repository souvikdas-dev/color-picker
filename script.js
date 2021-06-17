function showpopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    setTimeout(hide, 2000);

}
function hidepopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");

}