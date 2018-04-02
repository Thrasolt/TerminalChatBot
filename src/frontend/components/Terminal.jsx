import React from 'react';
import ChatItem from './ChatItem.jsx'
import InputField from './InputField.jsx'

export default class Terminal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [
        '>>> Hallo ich bin Luke der Bewerbungsbot',
      ],
      rootText: 'root@LukeBot: ',
    };
  }

  addToMsgs = (msg) => {
    const txt = this.state.rootText + msg;
    this.state.messages.push(txt)
    this.setState({
      messages: this.state.messages,
    })
  }

  renderChats() {
    return this.state.messages.map((msg, index) => {
      return (
        <ChatItem
          msg={msg}
          rootText={this.state.rootText}
          key={index}
        />
      )
    })
  }

  renderInputField(){
    return (
      <InputField
        rootText={this.state.rootText}
        addToMsgs={this.addToMsgs}
      />
    )
  }

  render() {

    return (
      <div>
        {this.renderChats()}
        {this.renderInputField()}
      </div>
    );
  }
}

var answers = [
  {
    keyword: "dauer",
    answer: "bla bla bla bla bla"
  },
  {
    keyword: "geld",
    answer: "bla bla bla bla bla"
  },
  {
    keyword: "stud",
    answer: "bla bla bla bla bla"
  },
]

var stdanswers = {
  hello: "hello",
  cool: "cool",
  bye: "bye"
}
