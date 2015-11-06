import React, {Components} from 'react';
import Note from './Note.jsx';

export default class Notes extends Components {
  render() {
    const notes = this.props.items;
    return (
      <ul className="notes">
        {notes.map(this.renderNote)}
      </ul>
    );
  }

  renderNote(note) {
    return (
      <li className="note" key={note.id}>
        <Note task={note.task} />
      </li>
    )
  }
}
