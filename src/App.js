import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Grid} from "semantic-ui-react";


class App extends Component {
  render() {
    return(
      <div>
        <Grid container columns={3}>
          <Grid.Column>1</Grid.Column>
          <Grid.Column>2</Grid.Column>
          <Grid.Column>3</Grid.Column>
        </Grid>
      </div>
    )
  };
}

export default App;
