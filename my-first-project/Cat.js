
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native'


const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
    <View>
    <Text>Hello, I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}</Text>
    <Button 
    onPress={
        () => {
            setIsHungry(false);
        }
    }
    title={isHungry ? 'Pour me some milk, please!' : 'Thank you'}
    disabled={!isHungry}></Button>
    </View>
    )
}

export default Cat;