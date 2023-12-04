import React, { useEffect, useState } from 'react'

import { Grid } from '@mui/material'
import { Container } from '@mui/system'

import axios from 'axios'

import Navbar from '../components/Navbar/Navbar.jsx'
import PokemonCard from '../components/PokemonCard/PokemonCard.jsx'

import Skeletons from '../components/Skeleton/Skeleton.jsx'

function Home() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        var endpoints = []

        for (var i = 1; i < 200; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        console.log(endpoints)
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
    }

    const pokemonFilter = (name) => {
        var filteredPokemons = []
        if (name === "") {
            getPokemons()
        }

        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }

    return (
        <>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={{ xs: 4 }}>
                    {pokemons.length === 0 ? <Skeletons /> :
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Grid>
                        ))
                    }

                </Grid>

            </Container>
        </>
    )
}

export default Home