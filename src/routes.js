import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import index from './index';
import dashboard from './components/dashboard';
import detalhesPraga from './components/detalhesPraga';
const Routes = createAppContainer(
    createStackNavigator({
        index: {
            screen: index,
            navigationOptions: {
                header: null,
            },
        }, 
        dashboard: {
            screen: dashboard,
            navigationOptions: {
                title: 'Lista de Pragas',
            },
        },
        detalhesPraga: {
            screen: detalhesPraga,
            navigationOptions: {
                title: 'Detalhes',
            },
        }, 
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#32CD32'
            },
        },
    } )
);
export default Routes;
