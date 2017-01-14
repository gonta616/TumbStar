import GiftedMessenger from 'react-native-gifted-messenger'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native'

export default class TumbStar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <View style={{
            flex: 1,
            marginTop: 20,
          }}>
          <GiftedMessenger
            ref={(c) => this._GiftedMessenger = c}
            styles={{
              container: {
                width: Dimensions.get('window').width,
              },
              bubbleRight: {
                marginLeft: 70,
                backgroundColor: "#007aff",
              },
            }}
            autoFocus={false}
            messages={[
              {
                text: 'Are you building a chat app?',
                name: 'React-Bot',
                image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
                position: 'left',
                date: new Date(2016, 3, 14, 13, 0),
                uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
              },
              {
                text: "Yes, and I use Gifted Messenger!",
                name: 'Awesome Developer',
                image: null,
                position: 'right',
                date: new Date(2016, 3, 14, 13, 1),
                uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
              },
            ]}
            handleSend={() => {}}
            onErrorButtonPress={() => {}}
            maxHeight={Dimensions.get('window').height - 20}
        
            loadEarlierMessagesButton={false}
            onLoadEarlierMessages={() => {}}
        
            senderName='Awesome Developer'
            senderImage={null}
            onImagePress={() => {}}
            displayNames={true}
        
            parseText={true}
            handlePhonePress={() => {}}
            handleUrlPress={() => {}}
            handleEmailPress={() => {}}
        
            isLoadingEarlierMessages={false}
        
            typingMessage={""}
          />
        </View>
        
        <Image 
          style={{
            width: 300,
            height: 200,
          }}
          resizeMode={"contain"}
          source={{uri:'https://unsplash.it/600/400/?random'}}
        />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TumbStar', () => TumbStar);
