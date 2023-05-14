import React, {useState, useEffect} from 'react';
import {Text, TextInput, View} from 'react-native'

const PizzaTranslator = () => {

    const [text, setText] = useState('')
    const [seenNumbers, setSeenNumbers] = useState(new Set())
    useEffect(() => {
        if(text.length % 3 == 0 && text.length != 0 && !seenNu.has(text.length)) {
            console.log(`Adding the value ${text.length} so we never see it again`);
            const length = text.length;
            setSeenNumbers(seenNumbers.add(text.length))
        }
    },[text])

    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{height:40}}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}>

                </TextInput>
                <Text style={{padding:10, fontSize: 42}}>
                    {text.split('').map(word => word && '🍕')}
                </Text>
        </View>
    )
}

export default PizzaTranslator;