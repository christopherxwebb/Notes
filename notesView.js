const NotesApi = require('./notesApi.js');
class NotesView {
  constructor(model, api = new NotesApi()) {
    this.model = model;
    this.api = api
    this.mainContainerEl = document.querySelector('#main-container');
    document.querySelector('#add-note-button').addEventListener("click", ()=> {
      this.addNote();
    });
    document.querySelector('#clear-note-button').addEventListener("click", ()=> {
      this.clearNote();
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

  clearNote() {
    this.api.clearNote()
    this.model.reset()
    this.displayNotes()
  }
};

module.exports = NotesView