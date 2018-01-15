import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SampleComponentWithProps extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>{ this.props.sampleProp }</Text>
            </View>
        );
    }
}

module.exports = SampleComponentWithProps;
