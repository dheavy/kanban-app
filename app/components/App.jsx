import uuid from 'node-uuid';
import React, {Component} from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends Component {
  constructor(props) {
    super(props);

    // We have to bind the context of `storeChanged`
    // explicitly so that `this` will point at the `App`
    // instance.
    this.storeChanged = this.storeChanged.bind(this);
    this.state = NoteStore.getState();

    /*this.findNote = this.findNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };*/
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged(state) {
    // Without proper `bind`, `this` wouldn't point
    // at the right context (defaults to `window`
    // in browser environment).
  }

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes items={notes} onEdit={this.editNote} onDelete={this.deleteNote} />
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
