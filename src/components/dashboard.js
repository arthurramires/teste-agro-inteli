import React, {Component} from 'react';
import { StyleSheet, View,Text, ImageBackground,Image, FlatList,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import back from '../../assets/splash.png'
import spodo from '../../assets/spodo.png'
import lagarta from '../../assets/lagarta.png'
import falsa from '../../assets/falsa.png'
import torrao from '../../assets/torrao.png'
import percevejo from '../../assets/percevejo.png'
import vaquinha from '../../assets/vaquinha.png'
import tamandua from '../../assets/tamandua.png'


export default class dashboard extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        pragas: [],
    }
    async componentDidMount(){
        await axios.get("https://www.mocky.io/v2/5e56eb9230000046d228eae4", {
            pragas: this.state.pragas
            }).then((response) => {
                this.setState({pragas: response.data});
            }).catch(error => {
            console.log(error)
        })
    }
    detalhes = (detalhes) => {
        this.props.navigation.navigate('detalhesPraga', detalhes)
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={back} style={{flex: 1}}>
               <FlatList
                        data={this.state.pragas}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) =>
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('detalhesPraga', this.detalhes(item, ))}> 
                                <View style={styles.card}>
                                    {item.name === "Spodoptera"
                                    ? <Image source={spodo} style={styles.pragas}/>
                                    : null
                                    }
                                    {item.name === "Torraozinho"
                                    ? <Image source={torrao} style={styles.pragas}/>
                                    :
                                    null
                                    }
                                    {item.name === "Falsa Medideira"
                                    ? <Image source={falsa} style={styles.pragas}/>
                                    :
                                    null
                                    }
                                    {item.name === "Percevejo MArron"
                                    ? <Image source={percevejo} style={styles.pragas}/>
                                    :
                                    null
                                    }
                                    {item.name === "Vaquinha"
                                    ? <Image source={vaquinha} style={styles.pragas}/>
                                    :
                                    null
                                    }
                                    {item.name === "Lagarta"
                                    ? <Image source={lagarta} style={styles.pragas}/>
                                    :
                                    null
                                    }
                                    {item.name === "Tamandua da Soja"
                                    ? <Image source={tamandua} style={styles.pragas}/>
                                    :
                                    null
                                    }
                                    <View style={styles.info}>
                                        <Text style={{color: '#787878', fontWeight: 'bold', fontSize: 18}}>{item.name}</Text>
                                        <Text style={{color: '#787878', fontSize: 15}}>QUANTIDADE: {item.quantity}</Text>
                                        <Text style={{color: '#787878', fontSize: 15}}>ÁREA: 250</Text>
                                    </View>
                                    <View style={{marginTop: 40}}>
                                        <MaterialIcons name="info" size={30}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                />
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
    card: {
        backgroundColor: '#fff',
        width: 330,
        height: 120,
        alignSelf: 'center',
        marginTop: 12,
        marginLeft: 0 ,
        borderRadius: 10,
        flexDirection: 'row'
    },
    info: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginTop: 9,
        backgroundColor: '#fff',
        width: 200,
        justifyContent: 'space-evenly',
        marginLeft: 10,
        marginBottom: 15
    },
    bug: {
        backgroundColor: '#fff',
        width: 60,
        height: 60,
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 9
    },
    pragas: {
        height: 60, 
        width: 60, 
        borderRadius: 30,
        marginTop: 30,
        marginLeft: 10
    }
});

