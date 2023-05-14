import React, {useEffect, useState} from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'


const MovieTheater = () => { 
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            console.log('data successfully received')
            setData(json.movies)
        } catch(error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
}

useEffect(() => {
    getMovies()
}, [])

return (
    <View style={{flex: 1, padding:10, marginTop:50,}}>
        {
            isLoading ? (
                <ActivityIndicator/>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                        <Text>
                            {item.title}, {item.releaseYear}
                        </Text>
                    )}/>
            )
        }
    </View>
)

}

export default MovieTheater