import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';

export default class PageTwo extends Component {

  render() {
    const { flagger, close } = this.props;
    let value = 0.5;
    let foo = function() {
       console.log('foo');
    };

    return (
      <View style={{margin: 128}}>
        <Text>This is PageTwo! { flagger ? 'bar' : 'foo'}</Text>
        <Text onPress={close}>{this.props.text}</Text>
        <Text>Value: {value}</Text>
        <Slider value={value} onValueChange={(val) => console.log(val) } />
      </View>
    )
  }
}
