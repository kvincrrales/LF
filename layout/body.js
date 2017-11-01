import React, { Component } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


export default class AppBody extends Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>

              <Body>
                <Text>Linux</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={require('../img/linux.png')} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
          <CardItem>
            <Text>
            GNU/Linux is an operating system, a large piece of software that manages a computer. It is similar to Microsoft Windows, but it is entirely free. The accurate name is GNU/Linux but "Linux" is used more often.
            
            GNU/Linux is not one company's product, but a number of companies and groups of people contribute to it. In fact, the GNU/Linux system is a core component, which is branched off into many different products. They are called distributions.
            
            Distributions change the appearance and function of GNU/Linux completely. They range from large, fully supported complete systems (endorsed by companies) to lightweight ones that fit on a USB memory stick or run on old computers (often developed by volunteers).
              </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comentarios</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}


const styles = StyleSheet.create({
  bodyText: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    color: 'red',
    fontSize: 40
  },
});



module.export = AppBody;