import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addNewContactToTable = () => {
    let newArray = [...this.state.contacts];

    let index = Math.floor(Math.random() * contacts.length);
    let newContact = contacts[index];

    newArray.push(newContact);

    this.setState({
      contacts: newArray,
    });
  };

  deleteContact = (id) => {
    //copy state to another variable
    const newArray = [...this.state.contacts];

    //get the index of the movie we want to delete
    const contactToRemoveIndex = newArray.findIndex((contact) => {
      return contact.id === id;
    });

    newArray.splice(contactToRemoveIndex, 1);
    this.setState({
      contacts: newArray,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addNewContactToTable}>Add new contact</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
        </table>

        <tbody>
          {this.state.contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="100px"
                  />
                </td>
                <td>
                  <h3>{contact.name}</h3>
                </td>
                <td>
                  <h3>{Math.round(contact.popularity)}</h3>
                </td>
                <button onClick={() => this.deleteContact(contact.id)}>
                  delete this contact
                </button>
              </tr>
            );
          })}
        </tbody>
      </div>
    );
  }
}
export default App;
