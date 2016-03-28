import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';

class TimeTravel extends React.Component {
	constructor(props) {
      super(props);
      this.handleUndo = this.handleUndo.bind(this);
      this.handleRedo = this.handleRedo.bind(this);
    }
	handleUndo(e){
		e.preventDefault();
    this.props.dispatch(ActionCreators.undo())
	}
  handleRedo(e){
    e.preventDefault();
    this.props.dispatch(ActionCreators.redo())
  }

  render() {
    return (
      <div className="timeTravel">
          <button className="undo pure-button pure-button-primary button-green" onClick={this.handleUndo}>Undo</button>
          <button className="redo pure-button pure-button-primary button-green" onClick={this.handleRedo}>Redo</button>
      </div>
    );
  }
}

TimeTravel.defaultProps = {

};


export default connect()(TimeTravel);
