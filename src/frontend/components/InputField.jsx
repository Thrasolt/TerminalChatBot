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

    return (
      <div className="container">
        <div className="root">
          {this.props.rootText}
        </div>
        <input
          type="text"
          className="inputStyle"
          autoFocus={true}
          onChange={this.changeText}
          onKeyPress={this.keyPress}
          value={this.state.text}
        />
      </div>
    );
  }
}
