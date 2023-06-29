import { ThunkDispatch, createSlice } from '@reduxjs/toolkit';
export interface PokemonBasic {
    name: string;
    url: string;
}
export interface PokemonState {
    page: number;
    pokemons: PokemonBasic[];
    isLoading: boolean;
}
type Action = {
    type : string, 
    payload :PokemonState
}
export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R


const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    isLoading: false,
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action : Action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons
        }
    }
});


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;