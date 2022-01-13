require('jest-fetch-mock').enableMocks();

const NotesApi = require('../notesApi.js');

describe('class NotesApi', () => {
    
    it('loads a note from the API', () => {
        const api = new NotesApi();
        fetch.mockResponseOnce(JSON.stringify({
            notes:'A note',
        }));
    
    api.loadNotes((noteInfo) => {
        expect(noteInfo.notes).toBe('A note');
    });
})})