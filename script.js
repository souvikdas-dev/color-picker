function popup() {
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
    setTimeout(hide, 2000);

}
function hide() {
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");

}