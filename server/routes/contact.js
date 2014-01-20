module.exports = function(app, auth, contact) {
    app.get('/api/contacts', auth, contact.list);
    app.post('/api/contact', auth, contact.addContact);
    app.delete('/api/contact/:id', auth, contact.deleteContact);
}
