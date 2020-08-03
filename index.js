
document.getElementById("submit").onclick = function () {
    this.onclick=null;
    grids()
    css()
}

document.getElementById("reset").onclick= function () {
    window.location.reload();        
}



function grids() {
    let columns = document.getElementById("gridNumber").value;
    for (let i = 0; i < (columns * columns); i++) {
        let grid = document.createElement("div")
        grid.id = "grid"
        grid.innerHTML = "\t";
        document.getElementById("container").appendChild(grid);
        grid.addEventListener("mouseover", function (event) {
            this.style.backgroundColor = "black";
        })
    }
    return
}

function css() {
    let columns = document.getElementById("gridNumber").value
    num = ""
    for (i = 0; i < columns; i++) {
        num += "auto "
    }
    document.getElementById("container").style.gridTemplateColumns = num
}

function reset() {

}