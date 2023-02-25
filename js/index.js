
function showOrHide(elementId) {
    let element = document.getElementById(elementId)
    let elementButton = elementId + '_button'
    
    if (window.getComputedStyle(element, null).display == "none") {
        document.getElementById(elementId).style.display = "block";
        document.getElementById(elementButton).style.backgroundColor = "#ffd60aff";
        document.getElementById(elementButton).style.color = "black"
    }
    else {
        document.getElementById(elementId).style.display = "none";
        document.getElementById(elementButton).removeAttribute("style")
    }
}
