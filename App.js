import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { store } from './src/app/store';
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './src/feature/pokemon/pokemonSlice';
import { useGetPokemonByNameQuery } from './src/services/pokemon';

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#453e3e",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    rowGap: 5, 
    columnGap: 5
  },
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    rowGap: 5, 
    columnGap: 5
  },
  rotatedText: {
    transform: [{ rotate: '270deg'}],
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: 10,
  }

});

const FlexBoxExample = () => {
  return (
    <View style={styles.screenContainer}>

<View style={styles.columnContainer}>
      <View style={{ flex: 1, backgroundColor: "#8977e0"}}></View>
      <View style={{ flex: 1, backgroundColor: "#01bcfb"}}></View>
      <View style={{ flex: 2, backgroundColor: "#007ff9"}}></View>
    </View>

    <View style={styles.columnContainer}>
      <View style={{ flex: 3, backgroundColor: "#78ccfa"}}></View>
      <View style={{ flex: 8, backgroundColor: "#01bcfb", alignItems: "center", justifyContent: "center"}}>
        <Text 
        style={styles.rotatedText}>
          FLEXBOX
        </Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "#573ec1"}}></View>
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



const withProvider = (props) => {
  return <Provider store={store}>
  <App {...props} />
  </Provider>

};

export default FlexBoxExample;
