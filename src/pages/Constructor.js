import React from 'react'
import { Header } from 'components/Header'
import { ConstructorItems } from 'components/ConstructorItems'
import { ConstructorField } from 'components/ConstructorField'
import { SandBox } from 'components/SandBox'

export const Weather = () => {
  return (
    <div className="w-[95%] h-[95%] bg-white rounded-xl grid grid-rows-6 grid-cols-6">
      <Header />
      <ConstructorItems />
      <ConstructorField />
      <SandBox />
    </div>
  )
}
