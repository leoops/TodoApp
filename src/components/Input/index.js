import React, { Component } from 'react';
import styles from './styles';
import { Item, Input, Label } from 'native-base';

const InputText = ({ 
    onChangeText, 
    value, 
    label, 
    style={},
}) => {
    return(
        <Item floatingLabel>
            <Label>{label}</Label>
            <Input 
                style={[ styles.input, style ]}
                onChangeText={ onChangeText }
                value={value}
            />
        </Item>
    );
}

export default InputText;