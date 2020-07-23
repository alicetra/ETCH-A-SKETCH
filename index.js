document.getElementById("submit").onclick = function (e) {
gridCollums()
gridRows()
}

function gridCollums() {
    let columns = document.getElementById("columns").value;
    for (let i = 0; i<columns; i++) {
        let columngrid = document.createElement("div")
        columngrid.innerHTML="\t"
        document.getElementById("container").appendChild(columngrid)
    }
return
}

function gridRows() {
let rows = document.getElementById("rows").value;
    for (let i = 0; i< rows; i++) {
        let rowgrid = document.createElement("div")
        rowgrid.innerHTML="\t"
        document.getElementById("container").appendChild(rowgrid)
    }
return
}
