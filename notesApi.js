class NotesApi {
    loadNotes(callback) {
      fetch('http://localhost:3000/notes')
        .then(response => response.json())
        .then(data => {
          callback(data)
        });
    }

    createNote(note) {
        const data = { content: note };
        fetch('http://localhost:3000/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  clearNote() {
    fetch('http://localhost:3000/notes', {
        method: 'delete'})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

module.exports = NotesApi;