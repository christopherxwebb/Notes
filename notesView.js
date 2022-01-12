class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    document.querySelector('#add-note-button').addEventListener("click", ()=> {
      this.addNote();
    });
  }

  displayNotes() {
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
    this.displayNotes()
  }
};

module.exports = NotesView