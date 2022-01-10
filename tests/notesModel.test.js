const NotesModel = require('../notesModel.js')

describe('class NotesModel', () => {
  beforeEach(() => {
    model = new NotesModel()
  })
  it('returns a blank array for getNotes initially', () => {
    expect(model.getNotes()).toEqual([]);
  })
  it('adds a entry when you call addNote', () => {
    model.addNote('Buy Milk');
    expect(model.getNotes()).toEqual(['Buy Milk']);
  })
  it('empties the notes when you call reset', () => {
    model.addNote('Buy Milk');
    model.reset()
    expect(model.getNotes()).toEqual([]);
  })
})