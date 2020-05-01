import React, { Component } from 'react';

class Collection extends Component {

  state = {
    firstName: true
  }

  toggle = () => {
    this.setState({ firstName: !this.state.firstName });
  }

  render() {
    return (
      <div className="coll">
        {this.state.firstName ? <div>
          Amit
          </div> :
          <div>
            Chigadani
          </div>}

        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default Collection;
