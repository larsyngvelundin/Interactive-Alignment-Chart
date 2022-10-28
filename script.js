//Setting tile values
var alignmentDict = {
    1: "Lawful Good",
    2: "Neutral Good",
    3: "Chaotic Good",
    4: "Lawful Neutral",
    5: "True Neutral",
    6: "Chaotic Neutral",
    7: "Lawful Evil",
    8: "Neutral Evil",
    9: "Chaotic Evil"
};

//Creating a table
const table = document.createElement("table");

//Creating each tile and adding tile value
for (let y = 0; y < 3; y++) {
    let tr = document.createElement("tr");
    for (let x = 0; x < 3; x++) {
        let tileIndex = (y * 3) + (x + 1);
        console.log(tileIndex);
        let td = document.createElement("td");
        td.innerHTML = alignmentDict[tileIndex];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

//Creating and adding CSS to document
var styleSheet = document.createElement("style");
styleSheet.innerText = `
    td{
        width: 120px;
        height: 120px;
        border: 1px solid black;
        text-align: center;
    }
    .clicked{
        color: white;
        background: black;
    }
`;
document.head.appendChild(styleSheet);

//Adding table to document
const existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(table);

//Add event listeners to each tile
var tiles = document.querySelectorAll("td");
tiles.forEach(tile => {
    tile.addEventListener('click', ()=>{
        toggleMenu(tile);
    });
});

//Removing 'clicked' class from all tiles, adding it to clicked tile
function toggleMenu(tile) {
    console.log(tile.innerHTML);
    tiles.forEach(tile => {tile.classList.remove("clicked");});
    tile.classList.add("clicked");
}