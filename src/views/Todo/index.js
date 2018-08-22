import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from "./styles";
import { addTodo, setTodoText, updateTodo, toggleTodo, setEditingTodo } from '../../store/actions';
import ButtonBordered from '../../components/Button'
import InputText from '../../components/Input';
import CardList from '../../components/List';

const TodoScreen = ({
    todo,
    todos,
    dispatchToggleTodo,
    dispatchSetEdittingTodo,
    dispatchAddTodo,
    dispatchSetTodoText,
    dispatchUpdateTodo,
}) => {
    
    const { text } = todo;

    onPressCardItem = (item) => dispatchToggleTodo(item);
    
    onLongPressCardItem = (itemId) => dispatchSetEdittingTodo(itemId);

    onPressButton = () => {
        if (todo.id != undefined ){
            return dispatchUpdateTodo(todo);
        }
        return dispatchAddTodo(todo.text);
    }

    onChangeText = text => dispatchSetTodoText(text);

    return(
        <View>
            <View style={ styles.formContainer }>
                <View style={ styles.inputContainer }>
                    <InputText
                        onChangeText={ text => (this.onChangeText(text)) }
                        label='Nota'
                        value={ text }
                    />
                </View>
                <View style={ styles.buttonContainer }>
                    <ButtonBordered
                        onPress={
                            () => this.onPressButton()}  
                        title='+' />
                </View>
            </View>
            <View>
                <CardList
                    arraylist={ todos }
                    onPressCardItem={ () =>
                        this.onLongPressCardItem()
                    }
                    onLongPressCardItem={ () => 
                        this.onLongPressCardItem()
                    }
                    />
            </View>
        </View>
    );
};

const mapStateToProps = state => {
    return {
        todo: state.editingTodo,
        todos: state.todos,
    }
}

export default connect (mapStateToProps,
{
    dispatchToggleTodo: toggleTodo,
    dispatchSetEdittingTodo: setEditingTodo,
    dispatchAddTodo: addTodo, 
    dispatchSetTodoText: setTodoText, 
    dispatchUpdateTodo: updateTodo,

})(TodoScreen);