const NotesApi = require('./notesApi.js');
class NotesView {
  constructor(model) {
    this.model = model;
    this.api = new NotesApi()
    this.mainContainerEl = document.querySelector('#main-container');
    document.querySelector('#add-note-button').addEventListener("click", ()=> {
      this.addNote();
    });
  }

  displayNotes() {
    const removeNote = document.querySelectorAll('.note');
    removeNote.forEach(note => {
      note.remove();
    })
    
    document.querySelector('#addNote').value=""

    const notes = this.model.getNotes()
    
    notes.forEach(note => {
      const noteEl = document.createElement('div')
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  };

  addNote() {
    const note = document.querySelector('#addNote').value;
    this.model.addNote(note)
    this.api.createNote(note)
    this.displayNotes()
  }
};

module.exports = NotesView