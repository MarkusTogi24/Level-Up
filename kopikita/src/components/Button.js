import * as React from 'react';
import { Button } from 'react-native-paper';

import {
    StyleSheet,
    Text,
} from 'react-native';

const MyButton = ({title, icon, style, action}) => (
    <Button icon={ icon } style={style} mode="contained" onPress={{action}}>
        <Text style={styles.ButtonTitle}>{ title }</Text>
    </Button>
);

const styles = StyleSheet.create({
    ButtonTitle : {
        color               : '#fff',
        fontSize            : 22,
        fontWeight          : 'bold',
    },
})

export default MyButton;