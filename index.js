document.getElementById("submit").onclick = function (e) {
gridRows()
}

function gridCollums() {
    let columns = document.getElementById("gridNumber").value;
    for (let i = 0; i<columns; i++) {
        let columngrid = document.createElement("div")
        columngrid.innerHTML="\t"
        document.getElementById("container").appendChild(columngrid)
    }
    document.getElementById("container").appendChild(document.createElement("br"))
    return
}

function gridRows() {
    let rows = document.getElementById("gridNumber").value;
    for (let i = 0; i< rows; i++) {
        gridCollums()
    }
return
}
