import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../assets/pest.png'),
            require('../assets/sateliteicon.png'),
            require('../assets/controle.png'),
          ]
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <SliderBox  sliderBoxHeight={600} images={this.state.images} dotColor="#32CD32" autoplay circleLoop 
                dotStyle={{
                    width: 20,
                    height: 8,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0,
                }} inactiveDotColor="#eee"
                />
                 <TouchableOpacity style={styles.acessar} onPress={() => this.props.navigation.navigate('dashboard')}>
                     <Text style={{color: '#fff'}}>ACESSAR</Text>
                 </TouchableOpacity>
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
    },
    acessar: {
        backgroundColor: '#32CD32',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginTop: 54,
        width: 260,
        alignSelf: 'center',
    }
});

