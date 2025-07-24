import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  releaseDate?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publicher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (!promocoes || !emBreve) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        games={promocoes}
        title="Promoções"
        background="gray"
      />
      <ProductsList
        id="coming-soon"
        games={emBreve}
        title="Em breve"
        background="black"
      />
    </>
  )
}

export default Home
