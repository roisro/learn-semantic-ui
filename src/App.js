import React, {Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import { Grid, Button, Container, Flag, Header, Image, Icon, Input, Label } from "semantic-ui-react";


class App extends Component {
  render() {
    return(
      <div>
        <Container textAlign="left">
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </Container>
        <Container textAlign="right">
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </Container>
        <Container textAlign="center">
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </Container>
        <Container textAlign="justified">
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </Container>

        <br />
        <br />

        <Grid container columns={3}>
          <Grid.Column>
            <Button primary>Kirim Pertama</Button>
            <Button secondary>Kirim kedua</Button>
            <Button basic color="red">Kirim Ketiga</Button>
          </Grid.Column>
          <Grid.Column>
            <Flag name="id" />
            <Flag name="netherlands" />
            <Flag name="ps" />
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" color="red">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQlhMQQisEOPOIoA_46gzAJ_JPUdoC5ampQ&usqp=CAU"/>
              Andra Darmawan
            </Header>
          </Grid.Column>
        </Grid>
        <Container textAlign="center">
          <Icon name="spinner" size="big" loading  />
        </Container>
        <Image 
          src="https://cdn.pixabay.com/photo/2015/11/02/14/01/google-1018443_960_720.png"
          size="tiny" href="https://google.com" target="_blank"
        />
        <Input type="text" placeholder="search" icon={<Icon name="search"/>}/>
        <Label pointing="left">Mesin Pencari Google</Label>
      </div>
    )
  };
}

export default App;
