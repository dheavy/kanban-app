import uuid from 'node-uuid';
import React, {Component} from 'react';
import AltContainer from 'alt-container';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

export default class App extends Component {
  // The AltContainer allows us to bind data to its immediate children.
  render() {
    return (
      <div>
        <button className="add-lane" onClick={this.addItem}>+</button>
        <AltContainer
          stores={[LaneStore]}
          inject={{
            items: () => LaneStore.getState().lanes || []
          }}>
          <Lanes />
        </AltContainer>
      </div>
    );
  }

  addItem() {
    LaneActions.create({task: 'New lane'});
  }
};
