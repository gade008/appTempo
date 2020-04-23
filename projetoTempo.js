import React, { Component } from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import OpenWeatherMap from './openWeatherMap';
import Forecast from "./Forescast";

class PrevisaoTempo extends Component {
    constructor(props) {
        super(props);
        this.state = { zip: "", Forecast: null };
    }

    _handleTextChange = event => {
        let zip = event.nativeElement.text;
        OpenWeatherMap.fetchForecast(zip).then( forecast => {
            this.setState({forecast: forecast });
        });
    };

    render() {
       let content = null;
       if (this.state.Forecast !== null) {
           content = (
               <Forecast
               main={this.state.forecast.main}
               description={this.state.forecast.description}
               temp={this.forecast.temp}
               />
           );
       }
       return (
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.welcome}>
                Nosso input {this.state.zip}.
                </Text>
                {content}
                <TextInput style={StyleSheet.input}
                onSubmitEditing={this._handleTextChange}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#666666",
    },
    welcome: {
        fontSize: 20, textAlign: "center", margin: 10 },
    input : {
        fontSize: 20,
        borderWidth: 2,
        padding: 2,
        height: 40,
        width: 100,
        textAlign: "center",
    }
});

export default WheaterProject;