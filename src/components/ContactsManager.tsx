import React, { useState } from 'react';

interface Contact {
  id: string;
  name: string;
  status: 'approved' | 'pending' | 'blocked';
  avatar: string;
  addedDate: string;
}

interface ContactsManagerProps {
  onClose: () => void;
}

const ContactsManager: React.FC<ContactsManagerProps> = ({ onClose }) => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Mom',
      status: 'approved',
      avatar: '👩',
      addedDate: '2024-01-15',
    },
    {
      id: '2',
      name: 'Dad',
      status: 'approved',
      avatar: '👨',
      addedDate: '2024-01-15',
    },
    {
      id: '3',
      name: 'Grandma',
      status: 'approved',
      avatar: '👵',
      addedDate: '2024-02-10',
    },
    {
      id: '4',
      name: 'Best Friend',
      status: 'approved',
      avatar: '🧒',
      addedDate: '2024-03-05',
    },
    {
      id: '5',
      name: 'Sarah',
      status: 'pending',
      avatar: '👧',
      addedDate: '2024-10-28',
    },
  ]);

  const [showAddContact, setShowAddContact] = useState(false);
  const [newContactName, setNewContactName] = useState('');

  const handleStatusChange = (contactId: string, newStatus: 'approved' | 'blocked') => {
    setContacts(contacts.map(contact =>
      contact.id === contactId ? { ...contact, status: newStatus } : contact
    ));
  };

  const handleRemoveContact = (contactId: string) => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleAddContact = () => {
    if (newContactName.trim()) {
      const newContact: Contact = {
        id: Date.now().toString(),
        name: newContactName,
        status: 'pending',
        avatar: '👤',
        addedDate: new Date().toISOString().split('T')[0],
      };
      setContacts([...contacts, newContact]);
      setNewContactName('');
      setShowAddContact(false);
    }
  };

  const approvedContacts = contacts.filter(c => c.status === 'approved');
  const pendingContacts = contacts.filter(c => c.status === 'pending');
  const blockedContacts = contacts.filter(c => c.status === 'blocked');

  return (
    <div className="app-container">
      <div className="header">
        <h1>👥 Manage Contacts</h1>
        <button className="guardian-button" onClick={onClose}>
          Back to Settings
        </button>
      </div>
      <div className="contacts-manager">
        <div className="contacts-intro">
          <p>
            Control who your child can communicate with. Only approved contacts can send and
            receive messages.
          </p>
        </div>

        <div className="contacts-section">
          <div className="contacts-section-header">
            <h2>✅ Approved Contacts ({approvedContacts.length})</h2>
            <button className="button-add" onClick={() => setShowAddContact(true)}>
              + Add New Contact
            </button>
          </div>

          {showAddContact && (
            <div className="add-contact-form">
              <input
                type="text"
                className="contact-input"
                placeholder="Enter contact name or Matrix ID..."
                value={newContactName}
                onChange={(e) => setNewContactName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddContact()}
                autoFocus
              />
              <div className="form-buttons">
                <button className="button-secondary" onClick={() => setShowAddContact(false)}>
                  Cancel
                </button>
                <button className="button-primary" onClick={handleAddContact}>
                  Add Contact
                </button>
              </div>
            </div>
          )}

          <div className="contacts-list">
            {approvedContacts.map((contact) => (
              <div key={contact.id} className="contact-card approved">
                <div className="contact-avatar">{contact.avatar}</div>
                <div className="contact-info">
                  <div className="contact-name">{contact.name}</div>
                  <div className="contact-meta">
                    <span className="contact-status">✅ Approved</span>
                    <span className="contact-date">Added: {contact.addedDate}</span>
                  </div>
                </div>
                <div className="contact-actions">
                  <button
                    className="action-button block"
                    onClick={() => handleStatusChange(contact.id, 'blocked')}
                    title="Block contact"
                  >
                    🚫 Block
                  </button>
                  <button
                    className="action-button remove"
                    onClick={() => handleRemoveContact(contact.id)}
                    title="Remove contact"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {pendingContacts.length > 0 && (
          <div className="contacts-section">
            <h2>⏳ Pending Approval ({pendingContacts.length})</h2>
            <div className="contacts-list">
              {pendingContacts.map((contact) => (
                <div key={contact.id} className="contact-card pending">
                  <div className="contact-avatar">{contact.avatar}</div>
                  <div className="contact-info">
                    <div className="contact-name">{contact.name}</div>
                    <div className="contact-meta">
                      <span className="contact-status">⏳ Pending</span>
                      <span className="contact-date">Requested: {contact.addedDate}</span>
                    </div>
                  </div>
                  <div className="contact-actions">
                    <button
                      className="action-button approve"
                      onClick={() => handleStatusChange(contact.id, 'approved')}
                    >
                      ✅ Approve
                    </button>
                    <button
                      className="action-button block"
                      onClick={() => handleStatusChange(contact.id, 'blocked')}
                    >
                      🚫 Block
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {blockedContacts.length > 0 && (
          <div className="contacts-section">
            <h2>🚫 Blocked Contacts ({blockedContacts.length})</h2>
            <div className="contacts-list">
              {blockedContacts.map((contact) => (
                <div key={contact.id} className="contact-card blocked">
                  <div className="contact-avatar">{contact.avatar}</div>
                  <div className="contact-info">
                    <div className="contact-name">{contact.name}</div>
                    <div className="contact-meta">
                      <span className="contact-status">🚫 Blocked</span>
                      <span className="contact-date">Blocked: {contact.addedDate}</span>
                    </div>
                  </div>
                  <div className="contact-actions">
                    <button
                      className="action-button approve"
                      onClick={() => handleStatusChange(contact.id, 'approved')}
                    >
                      ✅ Unblock
                    </button>
                    <button
                      className="action-button remove"
                      onClick={() => handleRemoveContact(contact.id)}
                    >
                      🗑️ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="contacts-note">
          <h3>ℹ️ How It Works</h3>
          <ul>
            <li>Your child can only chat with approved contacts</li>
            <li>New contact requests will appear in "Pending Approval"</li>
            <li>You can block contacts at any time to prevent communication</li>
            <li>Blocked contacts cannot send or receive messages</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactsManager;
