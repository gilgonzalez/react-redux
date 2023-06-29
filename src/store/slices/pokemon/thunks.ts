import { Dispatch } from "@reduxjs/toolkit"
import { pokeApi } from "../../../api/pokeApi"
import { PokemonBasic, setPokemons, startLoadingPokemons } from "./pokemonSlice"

interface ResponsePokeApi {
    count: number,
    next : string,
    previous : string | null,
    results : PokemonBasic[]
}

//https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
export const getPokemons = ( page = 0) => async (dispatch: Dispatch ) => {
    dispatch( startLoadingPokemons())

    //TODO REALIZAR PETICION HTTPS
    // const resp  = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    // const data = await resp.json() as ResponsePokeApi
    const { data } = await pokeApi.get(`/pokemon?limit=10&offset=${page * 10}`) 

    dispatch( setPokemons({pokemons : data.results, page: page + 1, isLoading:false}))
}