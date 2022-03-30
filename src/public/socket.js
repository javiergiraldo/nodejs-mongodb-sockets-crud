const socket = io();

export const loadNotes = (callback) => {
    socket.on('loadnotes', callback);
}; 

export const saveNote = (title, description) => {
    socket.emit('newnote', {
        title,
        description
    });
};