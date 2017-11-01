import React, {Component} from 'react';
import {Text} from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class AppFooter extends Component {
	render(){
		return (
			<Footer>
			<FooterTab>
			<Button vertical active>
			<Icon name="camera" />
			<Text>CopyLeft</Text>
			</Button>
			<Button vertical active>
			<Icon active name="navigate" />
			<Text>Creative Commons</Text>
			</Button>
			<Button vertical active>
			<Icon name="contact"/>
			<Text>CopyRight</Text>
			</Button>
			</FooterTab>
			</Footer>
			);
	}
}
module.export = AppFooter;