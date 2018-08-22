import React, { Component } from 'react';
import Item from '../Item';

import { connect } from 'react-redux';
import { toggleTodo, setEditingTodo } from '../../store/actions';
import { Card, CardItem } from 'native-base';

{/* Componente CardList, recebe um array de itens, 
que contenha a propriedade text e done 
e as funções onPress e/ou longPress
e renderiza um lista desses itens em formato de card
*/}
const CardList = ({ 
    arraylist, 
    onLongPressCardItem , 
    onPressCardItem
}) => (

    <Card dataArray={ arraylist }
        renderRow={(item) =>
            <CardItem bordered>
            <Item 
                text={ item.text } 
                done={ item.done }
                onLongPress={ () => onLongPressCardItem(item) }
                onPress={ () => onPressCardItem(item.id) } />
            </CardItem>
        }>
    </Card>

)
export default CardList;