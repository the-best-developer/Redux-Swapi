import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

// import actions
import getPeople from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getPeople();
  }

  render() {
    console.log(this.props)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div><h1>???????</h1></div>
    }
    else if (this.props.error) {
      // return something here to indicate that you are fetching data
      return <div><h1>{this.props.error}</h1></div>
    }
    
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


// our mapStateToProps needs to have two properties inherited from state
// // the characters and the fetching boolean
// export default connect( mapStateToProps, getPeople )(CharacterListView);

const mapStateToProps = (state) => {
  console.log(state)
  return {
      characters: state.charsReducer.characters,
      fetching: state.charsReducer.fetching,
      error: state.charsReducer.error
  }
};

export default connect(mapStateToProps, { getPeople } )(CharacterListView);