//import modules
import React from 'react'

//import components
import { Header } from 'components/Header'
import { ConstructorItems } from 'components/constructorItems/ConstructorItems'
import { ConstructorField } from 'components/constructorField/ConstructorField'
import { SandBox } from 'components/sandBox/SandBox'

export const Constructor = () => {
  return (
    <div className="w-[95%] h-[95%] bg-white rounded-xl grid grid-rows-6 grid-cols-6">
      <Header />
      <ConstructorItems />
      <ConstructorField />
      <SandBox />
    </div>
  )
}
