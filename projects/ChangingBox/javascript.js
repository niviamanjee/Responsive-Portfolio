function changeHeight() {
    document.getElementById("box").style.height = "300px";
    }

function changeColor() {
    document.getElementById("box").style.backgroundColor = "blue";
    }

function changeOpacity() {
    document.getElementById("box").style.opacity = "0";
    }
    
function resetData() {
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
    }

function setDate() {
    document.getElementById("box").innerHTML = Date()
}



