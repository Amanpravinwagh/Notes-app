let notes = [];

function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value;

  if (text === "") return;

  notes.push(text);
  input.value = "";

  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}

function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      ${note}
      <span class="delete" onclick="deleteNote(${index})">X</span>
    `;

    container.appendChild(div);
  });
}