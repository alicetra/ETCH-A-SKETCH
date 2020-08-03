document.getElementById("submit").onclick = function () {
    grids()
    css()
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
