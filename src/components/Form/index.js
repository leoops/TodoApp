import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import styles from "./styles";

import { addTodo, setTodoText, updateTodo } from '../../store/actions';
import ButtonBordered from '../Button'
import InputText from '../Input';

class Form extends Component {
    
    onPressCardItem() {

    }

    onLongPressCardItem() {

    }

    onPressButton(){
        const { todo } = this.props;
        if (todo.id != undefined ){
            return this.props.dispatchUpdateTodo(todo);
        }
        return this.props.dispatchAddTodo(todo.text);
    }
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }
    render(){
        const { text } = this.props.todo;
        return(
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
        );
    }
}
// buscas os parametros da store

const mapStateToProps = state => {
    return {
        todo: state.editingTodo,
    }
}


export default connect(
    mapStateToProps,{
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo,
})(Form);