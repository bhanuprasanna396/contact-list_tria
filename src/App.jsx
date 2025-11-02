import { useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-123-4567' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', phone: '444-987-6543' },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [newContact, setNewContact] = useState({ name: "", phone: "", email: "" });
  const [editContact, setEditContact] = useState(null);

  // Filtered contacts based on search
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add contact
  const handleAddContact = () => {
    if (!newContact.name || !newContact.phone || !newContact.email) return;
    setContacts([
      ...contacts,
      { id: Date.now(), ...newContact },
    ]);
    setNewContact({ name: "", phone: "", email: "" });
    setShowAddPopup(false);
  };

  // Edit contact
  const handleEditClick = (contact) => {
    setEditContact({ ...contact });
    setShowEditPopup(true);
  };

  const handleUpdateContact = () => {
    setContacts(
      contacts.map((c) => (c.id === editContact.id ? editContact : c))
    );
    setShowEditPopup(false);
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  return (
    <div className="app">
      <h1><span className="phone-icon">📃</span> Contact List</h1>

      <input
        type="text"
        placeholder="Search contacts..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button className="add-btn" onClick={() => setShowAddPopup(true)}>
        Add Contact
      </button>

      <ul className="contact-list">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <li key={contact.id}>
              <div className="contact-info">
                <strong>{contact.name}</strong>
                <div>{contact.phone}</div>
                <div className="email">{contact.email}</div>
              </div>
              <div>
                <button className="edit" onClick={() => handleEditClick(contact)}>
                  ✏️
                </button>
                <button className="delete" onClick={() => handleDelete(contact.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </ul>

      {/* Add Contact Popup */}
      {showAddPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Add Contact</h2>
            <input
              type="text"
              placeholder="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Phone"
              value={newContact.phone}
              onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={newContact.email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            />
            <div className="popup-buttons">
              <button onClick={handleAddContact}>Add</button>
              <button className="cancel" onClick={() => setShowAddPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Contact Popup */}
      {showEditPopup && editContact && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Edit Contact</h2>
            <input
              type="text"
              value={editContact.name}
              onChange={(e) =>
                setEditContact({ ...editContact, name: e.target.value })
              }
              placeholder="Name"
            />
            <input
              type="text"
              value={editContact.phone}
              onChange={(e) =>
                setEditContact({ ...editContact, phone: e.target.value })
              }
              placeholder="Phone"
            />
            <input
              type="email"
              value={editContact.email}
              onChange={(e) =>
                setEditContact({ ...editContact, email: e.target.value })
              }
              placeholder="Email"
            />
            <div className="popup-buttons">
              <button onClick={handleUpdateContact}>Save</button>
              <button className="cancel" onClick={() => setShowEditPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
