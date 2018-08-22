import React from 'react';
import { Button, Text } from "native-base";

export default ButtonBordered = ({
    title,
    style={},
    disabled = false, 
    onPress }
) => (
    <Button bordered
        style={ style }
        disabled={ disabled } 
        onPress={ onPress }>
        <Text>{ title }</Text>
    </Button>
)