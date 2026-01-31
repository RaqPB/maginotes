const container = document.getElementById('imageContainer');

container.addEventListener("click", (event) => {

    const rectangle = container.getBoundingClientRect();

    const x = event.clientX - rectangle.left;
    const y = event.clientY - rectangle.top;

    //console.log("Click detected at:", x, y);

    const symbolNote = document.createElement('div');

    symbolNote.classList.add("noteMarker");
    symbolNote.style.left = x + "px";
    symbolNote.style.top = y + "px";

    container.appendChild(symbolNote);

    const noteText = window.prompt("Enter note:");
    if (!noteText){
        return;
    }
    const noteContent = document.createElement('div');
    noteContent.classList.add("noteText");
    noteContent.innerText = noteText;

    symbolNote.appendChild(noteContent);
    container.appendChild(symbolNote);
});

