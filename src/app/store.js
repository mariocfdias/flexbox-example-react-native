import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from '../feature/pokemon/pokemonSlice'
import { pokemonApi } from '../services/pokemon'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    [pokemonApi.reducerPath]: pokemonApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware),

})

setupListeners(store.dispatch)

