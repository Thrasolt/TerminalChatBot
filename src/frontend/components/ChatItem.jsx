import React from 'react';

export default class ChatItem extends React.Component {


  render() {

    const style = {
      fontFamily: 'Courier New',
      color: 'white',
    }

    return (
      <div style={style}>
        {this.props.msg}
      </div>
    );
  }
}
