import React from 'react';

export default class InputField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  changeText = (evt) =>{
    console.log(evt.target.value);
    this.setState({
      text: evt.target.value,
    })
  }

  keyPress = (event) => {
    let code = event.keyCode || event.which;
    console.log("code: ", code);
    if(code === 13){
      this.props.addToMsgs(this.state.text);
      this.setState({
        text: '',
      })
    }
  }

  render() {

    const style = {
      fontFamily: 'Courier New',
      fontWeight: 'bold',
    }

    const inputStyle = {
      outline: 'none',
      fontFamily: 'Courier New',
      fontWeight: 'bold',
      backgroundColor: 'transparent',
      borderWidth: '0px',
      border: 'none',
      height: '20px',
      width: '160px',
      color: '#CCC',
      fontSize: '100%',
      color: 'black',
    }

    return (
      <div style={style}>
        {this.props.rootText}
        <input
          type="text"
          style={inputStyle}
          autoFocus={true}
          onChange={this.changeText}
          onKeyPress={this.keyPress}
          value={this.state.text}
        />
      </div>
    );
  }
}
