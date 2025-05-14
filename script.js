function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function saveNote() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  if (title && content) {
    localStorage.setItem(title, content);
    alert('Note saved!');
  } else {
    alert('Title and content required.');
  }
}

function listNotes() {
  const notes = document.getElementById('notes');
  notes.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const title = localStorage.key(i);
    const content = localStorage.getItem(title);
    notes.innerHTML += `<div><b>${title}</b>: ${content} <button onclick="deleteNote('${title}')">❌</button></div>`;
  }
}

function deleteNote(title) {
  localStorage.removeItem(title);
  listNotes();
}
