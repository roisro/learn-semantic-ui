import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Button} from "semantic-ui-react";


class App extends Component {
  render() {
    return(
      <div>
        <h1>Selamat Datang React Semantic UI</h1>
        <Button primary>Button Pertama</Button>
        <Button secondary>Button Kedua</Button>
      </div>
    )
  };
}

export default App;
