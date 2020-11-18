import React, { useState, useEffect } from 'react';
import PokemonList from './pokemonList';
import axios from 'axios'
import Pagination from './pagination';
function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=151')
  const [nextPageUrl, setNextPage] = useState()
  const [prevPageUrl, setPrevPage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel 
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => {
      cancel()

    }

  }, [currentPageUrl])

  function gotoNextPage(){
    setCurrentPage(nextPageUrl)
  }
  function gotoPrevPage() {
    setCurrentPage(prevPageUrl)
  }
  if (loading) return "Loading...."

  return (
    <>
    <PokemonList pokemon={pokemon} />
    <Pagination
    gotoNextPage={nextPageUrl ? gotoNextPage : null}
    gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
    />
    </>
  );
}
//listy of pokemone
//pagenation

export default App;




// const React = require('react');
// //add Hello, World and Greet components here. refer to description if you are stuck. good luck :)
// //creat function Hello (){let hello = <h1>Hello<h1>}
// //create function World (){ let World = <h2>World<h2>}
// //create CLASS greet () extends component and nest child hello y world

// function Hello() {
//   return (
//     <h1>Hello</h1>);
//     }
// function World() {
//   return (
//     <h2>World</h2>);
//     }

// class Greet extends React.Component {
//   render() {
//    return ( <div> <Hello />
//     <World /> </div>
//            );
//   }  
    
//}