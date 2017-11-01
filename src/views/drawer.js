import React, { Component } from 'react';
import {Text,Image} from 'react-native';
import {Content, List, ListItem,  H1, Icon, Left, Body,Header, Right, Switch } from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
          <Content style={{backgroundColor: '#ffffff'}}>
           <List>
            <Header>
            <H1 style={{color:'#ffffff'}}>GNU/Linux</H1>
            </Header>

            <ListItem>  
            <Image source={require('../../img/linux.png')} style={{ height: 150, width: null, flex: 1 }} />
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="logo-googleplus" />
              </Left>
              <Body>
                <Text>Google +</Text>
              </Body>
              <Right>
                <Text>Iniciar Session</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="logo-facebook" />
              </Left>
              <Body>
                <Text>Facebook</Text>
              </Body>
              <Right>
                <Text>Iniciar Session</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            
            <ListItem icon>
              <Left>
                <Icon name="person" />
              </Left>
              <Body>
                <Text>Cuenta</Text>
              </Body>
              <Right>
                <Text>Iniciar Session</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          </Content>
    );
  }
}

module.exports = Sidebar;