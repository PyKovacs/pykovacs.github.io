
function showOrHide(elementId) {
    let element = document.getElementById(elementId)
    let elementButton = elementId + '_button'
    
    if (window.getComputedStyle(element, null).display == "none") {
        document.getElementById(elementId).style.display = "block";
        document.getElementById(elementButton).style.backgroundColor = "#1e2a35";
        document.getElementById(elementButton).style.boxShadow = "1px 1px 2px black";
    }
    else {
        document.getElementById(elementButton).removeAttribute("style")
        document.getElementById(elementId).removeAttribute("style")
    }
}
