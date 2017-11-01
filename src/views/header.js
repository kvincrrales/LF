import React, {Component} from 'react';
import {Text} from 'react-native';
import {Header, Left, Button, Icon, Title, Body , Right} from 'native-base';

export default class AppHeader extends Component {
	render(){
		return (
			<Header>
			<Left>
			<Button transparent onPress={()=>this.openDrawer()}>
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
			);
		}
	}
	module.export = AppHeader;