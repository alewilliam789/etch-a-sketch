

function createBox(rowNum, columnNum, dim){
    // List of Tailwind class to create box
    let boxClasses= ['p-3', 'border-l-2', 'border-t-2', 'border-black'];
    
    // Get the row you are appending to
    row = document.getElementById(`row${rowNum}`);

    // Create new div to append
    box = document.createElement("div");

    // Iterate through each class and add to the div
    box.classList.add(...boxClasses);

    // If it's the bottom row add a bottom border
    if (rowNum === dim){
        box.classList.add("border-b-2");
    }

    // If it's the last column add a border to the right
    if(columnNum === dim){
        box.classList.add("border-r-2");
    }

    // Append to the main row
    row.appendChild(box);
}

function createRow(rowNum){
    // List of Tailwind classes to create row
    let rowClasses = ["flex"]
    
    // Get the main grid div
    grid = document.getElementById("grid");

    // Create a new row to add
    row = document.createElement("div");

    // Add the id so the box function can find it
    row.setAttribute("id",`row${rowNum}`);

    // Iterate through each class and add to the div
    row.classList.add(...rowClasses);

    // Append to the main grid
    grid.appendChild(row);
}


function createGrid(){
    // Dimensions of box
    dim =16

    // Iterate through each place and add a box
    for (let i=1;i <= dim; i++){
            createRow(i)
        for (let j=1; j <= dim; j++){
            createBox(i,j,dim);
        }
    }
}

// Create grid on load
window.addEventListener("load",createGrid);
