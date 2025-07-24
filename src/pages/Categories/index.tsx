import { useEffect } from 'react'
import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  const ready =
    actionGames && sportGames && simulationGames && fightGames && rpgGames

  if (!ready) return <h3>Carregando...</h3>

  return (
    <>
      <ProductsList
        id="action"
        games={actionGames}
        title="Ação"
        background="black"
      />
      <ProductsList
        id="sports"
        games={sportGames}
        title="Esportes"
        background="gray"
      />
      <ProductsList
        id="simulation"
        games={simulationGames}
        title="Simulação"
        background="black"
      />
      <ProductsList
        id="fight"
        games={fightGames}
        title="Luta"
        background="gray"
      />
      <ProductsList id="rpg" games={rpgGames} title="RPG" background="black" />
    </>
  )
}

export default Categories
