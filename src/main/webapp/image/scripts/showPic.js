/**
 * Created by Rayest on 2016/8/22 0022.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    for(var i = 0; i < body_element.childNodes.length; i++){
        // alert(body_element.childNodes[i]);
    }
}
window.onload = countBodyChildren;