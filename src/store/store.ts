import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './api/todosApi'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'


export const store = configureStore({
  reducer: {
    pokemons : pokemonSlice.reducer,
    [todosApi.reducerPath] : todosApi.reducer
  },
  middleware : getDefaultMiddleware => getDefaultMiddleware().concat(todosApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

