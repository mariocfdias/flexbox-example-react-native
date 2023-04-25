import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { store } from './src/app/store';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './src/feature/pokemon/pokemonSlice';
import { useGetPokemonByNameQuery } from './src/services/pokemon';


const HelloWorld = () => {
  return(
    <View style={styles.container}>

    <View style={{flexDirection: "row"}}>

      <View style={{ padding:20, backgroundColor: "#000"}}>
        <Text style={{ color: "white"}}>Primeira Coluna</Text>
      </View>

      <View style={{ padding:20, backgroundColor: "#000"}}>
        <Text style={{ color: "white"}}>Segunda Coluna</Text>
      </View>

    </View>
    </View>
  )
}

const FlexBoxExample = () => {
  return (
    <View style={{backgroundColor: "black", width: "100%", height: "100%", flexDirection: "row", rowGap: 5, columnGap: 5}}>

<View style={{flex: 1, flexDirection: "column", rowGap: 5, columnGap: 5}}>
      <View style={{ flex: 1, backgroundColor: "purple"}}></View>
      <View style={{ flex: 1, backgroundColor: "lightblue"}}></View>
      <View style={{ flex: 2, backgroundColor: "purple"}}></View>
    </View>

    <View style={{flex: 1, flexDirection: "column", rowGap: 5, columnGap: 5}}>
      <View style={{ flex: 3, backgroundColor: "lightgray"}}></View>
      <View style={{ flex: 8, backgroundColor: "lightblue", alignItems: "center", justifyContent: "center"}}>
        <Text 
        style={{
              transform: [{ rotate: '90deg'}],
              fontWeight: 800,
              fontSize: 36,
              letterSpacing: 4     }}>
          FLEXBOX
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "purple"}}></View>
    </View>

    </View>

  )
}
const PokemonCard = (pokemon) => {
    <View>
      <Text>{pokemon.name}</Text>

    </View>
}
 function App() {
  const [click, isClick] = useState()
  const count = useSelector((state) => state.pokemon.value)
  const dispatch = useDispatch()
  const [array, setArray] = useState([])
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')


  return (
    <View style={styles.container}>

      <Text>
        {count}
      </Text>
      <Button title='Incrementar teste' onPress={() => {
        dispatch(increment())
        console.log(data)
      }}/>
            <Button title='Decrementar' onPress={() => {
        dispatch(decrement())
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const withProvider = (props) => {
  return <Provider store={store}>
  <App {...props} />
  </Provider>

};

export default FlexBoxExample;
