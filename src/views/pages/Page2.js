import React from 'react'
import Tablaofertas from '../../components/Tablaofertas'
import Tablapicante from '../../components/Tablapicante'
import Tablaveggie from '../../components/tablaveggie'

const Page2 = () => {
  return (
    <div>
      <h1 className="text-center">Burguers picantes</h1>
      <Tablapicante />
      <h1 className="text-center">Veggies</h1>
      <Tablaveggie />
      <h1 className="text-center">Ofertas</h1>
      <Tablaofertas />

    </div>
  )
}

export default Page2
