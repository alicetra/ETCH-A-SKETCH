document.getElementById("submit").onclick = function (e) {
gridRows()
gridCollums()
}

function gridCollums() {
    let columns = document.getElementById("gridNumber").value;
    for (let i = 0; i<columns; i++) {
        let columngrid = document.createElement("div")
        columngrid.innerHTML="\t"
        document.getElementById("rows").appendChild(columngrid)
    }
    return
}

function gridRows() {
    let rows = document.getElementById("gridNumber").value;
    for (let i = 0; i<rows; i++) {
        let rowsgrid = document.createElement("div")
        rowsgrid.innerHTML="\t"
        document.getElementById("columns").appendChild(rowsgrid)
    }
    return
}
