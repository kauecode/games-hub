import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Axios } from 'axios';
import { Text } from '@chakra-ui/react';

interface FetchGamesRes {
  count: number,
  results: Game[]
}

interface Game {
  id: number,
  name: string
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get<FetchGamesRes>('/games')
      .then((res) => {
        console.log(res.data.results)
        setGames(res.data.results)
      })
      .catch((err) => {
        console.log(err)
        setError(err.message)
      })
  },[])

  return (
    <>
    {error && 
      <Text>{error}</Text>
    }
    <ul>
      {games.map((game, i) =>
        <li key={game.id}>{game.name}</li>
      )}
    </ul>
    </>
  )
}

export default GameGrid