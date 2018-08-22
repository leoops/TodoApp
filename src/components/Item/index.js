import React from 'react';
import { Button, Text } from 'native-base';
import styles from './styles';
const Item = ({ 
    text, 
    onPress, 
    onLongPress, 
    done = false,
    style = {},
}) => {
    return(
        <Button 
            transparent 
            full
            onLongPress={ onLongPress }
            onPress={ onPress }
            style={[ styles.button, style ]}>
            <Text style={ [styles.text, , done ? styles.lineThrough : null ] } > { text } </Text>
        </Button>
    );
}
export default Item;