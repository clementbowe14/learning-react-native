import React, {useState, useEffect} from 'react';
import {Text, TextInput, View} from 'react-native'

const TodoList = () => {
    const [todoList, setTodoList] = useState([])
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(console.log(response))
    }, [])

    return (
        <View >

        </View>
    )
}

export default TodoList;
