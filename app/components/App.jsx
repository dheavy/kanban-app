import uuid from 'node-uuid';
import React, {Component} from 'react';
import AltContainer from 'alt-container';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends Component {
  render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>

        // The AltContainer allows us to bind data to its immediate
        // children. In this case it injects the `items` property into
        // `Notes`.
        <AltContainer stores={[NoteStore]} inject={{
          items: () => NoteStore.getState().notes
        }}>
          <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
        </AltContainer>
      </div>
    );
  }

  addNote() {
    NoteActions.create({task: 'New task'});
  }

  editNote(id, task) {
    NoteActions.update({id, task});
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }
}
