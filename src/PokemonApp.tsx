import { useEffect, useState } from 'react'
import './App.css'
import { useGetTodoQuery, useGetTodosQuery } from './store/api/todosApi'
import { useAppDispatch, useAppSelector } from './store/hooks/hooks'
import { getPokemons } from './store/slices/pokemon/thunks'

function PokemonApp() {
  const [todo, setTodo] = useState(1)
  const {pokemons, isLoading, page} = useAppSelector(state => state.pokemons)
  const dispatch = useAppDispatch()

  const {data : todos, isLoading : loadingRTK} = useGetTodosQuery('')
  const {data : todoApi} = useGetTodoQuery(todo)
  console.log(todo)

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])
  
  
  return (
    <>
    <h1>TO DOS! RTK QUERY</h1>
    {loadingRTK && <p>Is loading...</p>}
    <pre>{JSON.stringify(todoApi, null, 2)}</pre>
    <button onClick={() => setTodo(prev => prev +1)}>Next todo</button>
    <ul>
      {
        todos?.map(todo => (
          <li style={{listStyle: "none", textAlign:"left"}} key={todo.id}>{todo.completed ? "✔️" : "✖"}{todo.title}</li>
          
          )
        )
      }
    </ul>

    <hr />
    <h1>Pokemon</h1>
    <hr />
    {
      isLoading ? (<h2>Cargando...</h2>) :
      pokemons.map(pokemon => (
        <li>{pokemon.name}</li>
      ))
    }
    <button onClick={() => dispatch(getPokemons(page))}>Cargar los siguientes</button>
    </>
  )
}

export default PokemonApp
