import React, { Component } from "react";

import { StyleSheet, Text, View } from "react-native";

class Forecast extends Component {
    render() {
        return(
            <View Style={style.container}>
                <Text style={style.bigText}>
                    {this.props.main}
                </Text>

                <Text style={styles.mainText}>
                    Condições atuais: {this.props.description}
                </Text>

                <Text style={styles.bigText}>
                    {this.props.temp}ºC
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {height: 130},
    bigText: {
        flex: 2,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
});

export default Forecast;