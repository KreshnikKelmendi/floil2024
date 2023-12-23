import React from 'react'
import Banner from '../components/Banner/Banner'
import Refinery from '../components/home/Refinery'
import Kampanja from '../components/campaign/Kampanja'
import Rapsol from '../components/campaign/Rapsol'
import Product from '../components/products/Product'
import FloilCares from '../components/floilCares/FloilCares'
import Recipes from '../components/recipes/Recipes'

const HomePage = () => {
  return (
    <>
    <Banner />
    <Refinery />
    <Kampanja />
    <Rapsol />
    <Product />
    <FloilCares />
    <Recipes />
    </>
  )
}

export default HomePage