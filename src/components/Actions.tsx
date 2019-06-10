import React, { Component } from 'react';
import { AppState } from '../lib/types'
import { GetQuests } from '../lib/api'

export default abstract class Actions extends Component<AppState,AppState> {
  
  HandleClick(e:React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      if(this.state.isNew){
          this.setState({ isNew: false });
      } else {
          this.setState({ isNew: true });
      }
  }

/*  HandleChange(e:React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    this.setState({
      userText: e.target.value
    });
  }*/

  GetText(text:any){
    let temp = Math.floor(Math.random() * Math.floor(801));
    // Fetch new quest text from XIVAPI
    GetQuests();

    // Put new text in source & target states, and clear userText state
    text.source = `New Source Text - #${temp}`;
    text.target = "A wild Target Text appears!";

  }
}