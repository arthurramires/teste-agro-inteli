import React, {Component} from 'react';
import { StyleSheet, View,Text, ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import calcular from '../functions/calculaIncidencia';
import back from '../../assets/splash.png'

export default class dashboard extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        incidenciaPraga: 0,
        area: 250
    }
    async componentDidMount(){
        const params = this.props.navigation.state.params;
        const incidencia = calcular.calculaIncidencia(this.state.area, params.quantity)
        this.setState({
            incidenciaPraga: incidencia.toFixed(2),
        })
    }
    /*
         {this.state.incidenciaPraga >= 30 
                ? <Text style={{color: '#F00'}}>{this.state.incidenciaPraga}</Text>
                : <Text style={{color: '#32CD32'}}>{this.state.incidenciaPraga}</Text>
                }
    */ 
    render() {
        const params = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <ImageBackground source={back} style={{flex: 1}}>
               <View style={styles.resultado}>
                    <View style={styles.icon}>
                        {
                            this.state.incidenciaPraga >= 30 
                            ? <MaterialIcons name="sentiment-very-dissatisfied" size={80} color="#F00" />
                            : <MaterialIcons name="sentiment-very-satisfied" size={80} color="#32CD32" />
                        }
                    </View>
                    <Text style={styles.texto}>Incidência de {params.name}:</Text>
                    <View style={styles.incidencia}>
                        {   
                            this.state.incidenciaPraga >= 30 
                            ? <Text style={{color: '#F00', fontSize: 19, fontFamily: 'Roboto'}}>{this.state.incidenciaPraga} %</Text>
                            : <Text style={{color: '#32CD32', fontSize: 19, fontFamily: 'Roboto'}}>{this.state.incidenciaPraga} %</Text>
                        }
                    </View>
                    <Text style={styles.obs}>Observação:</Text>
                    <View style={styles.textObs}>
                        {   
                            this.state.incidenciaPraga >= 30 
                        ?     <Text style={{color: '#000', fontSize: 19, fontFamily: 'Roboto', marginLeft: 20}}>O nível de incidência de {params.name} na plantação está acima do adequado</Text>
                        :     <Text style={{color: '#000', fontSize: 19, fontFamily: 'Roboto', marginLeft: 20}}>O nível de incidência de {params.name} na plantação está adequado</Text>
                        }
                    </View>
               </View>
               </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    resultado: {
        alignSelf: 'center',
        width: 330,
        height: 500,
        marginTop: 90,
        backgroundColor: '#fff',
        borderRadius: 10,
       
    },
    icon: {
        width: 150,
        height: 130,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 90,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#000',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#000',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderLeftColor: '#000',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    incidencia: {
        width: 250,
        height: 60,
        marginTop: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#000',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#000',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderLeftColor: '#000',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 18,
        marginLeft: 58,
        marginTop: 30,
        fontWeight: 'bold',
    },
    obs: {
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 18,
        marginLeft: 115,
        marginTop: 30,
        fontWeight: 'bold',
    },
    textObs: {
        width: 250,
        height: 90,
        marginTop: 30,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#000',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#000',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderLeftColor: '#000',
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: '#000',
        justifyContent: 'space-around',
    }
});