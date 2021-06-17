import React from 'react'
import Tablaofertas from '../../components/Tablaofertas'
import Tablapicante from '../../components/Tablapicante'
import Tablaveggie from '../../components/tablaveggie'

const Page2 = () => {
  return (
    <div className="pt-5">
      <h1 className="text-center pt-5">Burgers picantes</h1>
      <Tablapicante />
      <h1 className="text-center pt-5">Veggies</h1>
      <Tablaveggie />
      <h1 className="text-center pt-5">Ofertas</h1>
      <Tablaofertas />

    </div>
  )
}

export default Page2
