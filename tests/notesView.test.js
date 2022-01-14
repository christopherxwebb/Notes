/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('../notesModel.js')
const NotesView = require('../notesView.js')


describe('class notesView', () => {
  it('displayNotes creates a new div element on the page for each note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel()
    const api = {createNote: "object"}
    const view = new NotesView(model, api)

    model.addNote('Go to the gym')
    model.addNote('Walk the dog')

    view.displayNotes()

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it('add note button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel()
    const api = {createNote: "object"}
    const view = new NotesView(model, api)

    const button = document.querySelector("#add-note-button")
    const input = document.querySelector("#addNote")
    input.value = "Walk dog";
    button.click();
    
    const input2 = document.querySelector("#add-note-button")
    input2.value = "Eat lunch";
    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  })

});