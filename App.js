
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, StyleProvider, Drawer, Header, Left, Button, Icon, Title, Body, Right } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

import AppHeader from './src/views/header';
import AppBody from './src/views/body';
import AppFooter from './src/views/footer';
import SideBar from './src/views/drawer';

export default class LF extends Component {
  closeDrawer() {
    this._drawer._root.close()
  }
  openDrawer() {
    this._drawer._root.open()
  }
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()} >

          <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => this.openDrawer()}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>LF</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='search' />
                </Button>
              </Right>
            </Header>
            <AppBody />
            <AppFooter />
          </Container>
        </Drawer>
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('LF', () => LF);