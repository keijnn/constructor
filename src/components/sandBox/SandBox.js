//import modules
import React from 'react'

//import components
import { SandBoxFielld } from './SandBoxField'

export const SandBox = () => {
  return (
    <div className="max-w-screen max-h-full overflow-auto px-5 col-start-4 p-3 col-end-7 row-span-6">
      <SandBoxFielld />
    </div>
  )
}
