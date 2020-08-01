document.getElementById("submit").onclick = function (e) {
    grid()
    css()
}

function grid() {
    let columns = document.getElementById("gridNumber").value;
    for (let i = 0; i<(columns * columns); i++) {
        let columngrid = document.createElement("div")
        columngrid.innerHTML = i
        document.getElementById("container").appendChild(columngrid)
    }
        return
}

function css() {
    let columns = document.getElementById("gridNumber").value
    num = ""
    for (i=0; i<columns; i++) {
        num += "auto "
    }
    document.getElementById("container").style.gridTemplateColumns = num
}
