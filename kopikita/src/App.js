import * as React from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Route from './routes';


import { MyCard, MyButton } from './components';

const fontConfig = {
    android: {
        regular: {
            fontFamily: 'Poppins-Regular.ttf',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'Poppins-Medium.ttf',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'Poppins-Light.ttf',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'Poppins-Thin.ttf',
            fontWeight: 'normal',
        },
    }
};
const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig),
};

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    Text,
    Image
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
    return (
        <PaperProvider >
            <NavigationContainer>
                <StatusBar/>
                <View style={styles.container} theme={theme}>
                    <Image 
                        source={require('./assets/Pictures/HPBG.jpg')} 
                        style={styles.backgroundImg}/>
                    <Text style={styles.appName}>KOPIKITA</Text>
                    <Text style={styles.afr4g}>Temukan Kopimu</Text>
                    <View style={styles.loginBtnArea}>
                        <MyButton style={styles.registerBtn} title="Daftar"/>
                        <MyButton style={styles.loginBtn} title="Masuk"/>
                    </View>
                </View>
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container : {
        width               : '100%',
        height              : '100%',
        backgroundColor     : 'powderblue',
        display             : 'flex',
        position            : 'relative'
    },
    backgroundImg: {
        resizeMode          : 'cover',
        height              : '100%',
        width               : undefined,
        aspectRatio         : 1,
        alignSelf           : 'center',
        position            : 'relative'
    },
    appName : {
        position            : 'absolute',
        color               : '#000',
        marginLeft          : 30,
        marginTop           : 45,
        fontSize            : 60,
        fontWeight          : 'bold'
    },
    afr4g : {
        position            : 'absolute',
        color               : '#c48d39',
        marginLeft          : 30,
        marginTop           : 110,
        fontSize            : 30,
        fontWeight          : 'bold',
    },
    loginBtnArea : {
        display             : 'flex',
        flexDirection       : 'row',
        width               : '100%',
        position            : 'absolute',
        bottom              : 100,
        justifyContent      : 'space-evenly'
    },
    loginBtn : {
        backgroundColor     : '#bababa',
        width               : '40%',
        fontSize            : 30,
        paddingHorizontal   : 4,
        borderRadius        : 50,
        shadowOffset        : [12,12]
    },
    registerBtn : {
        backgroundColor     : '#c48d39',
        width               : '40%',
        fontSize            : 30,
        paddingHorizontal   : 4,
        borderRadius        : 50,
        shadowOffset        : [12,12]
    },
});