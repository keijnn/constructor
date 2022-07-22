import React from 'react'
import { useStore } from 'effector-react';
import { $sandbox } from 'features/constructor';



export const SandBox = () => {

  const sandbox = useStore($sandbox)

  const sandboxField = sandbox.map(item => {
    return (
      <div
        className="w-full cursor-pointer mb-3 rounded-xl h-20 flex flex-col items-center justify-center bg-[#D9E7FF]"
        key={item.id}
      >
        {item.title}
      </div>
    )
  })

  return (
    <div className="pt-8 max-h-full overflow-auto px-5 col-start-4 p-3 col-end-7 row-span-6">
      {sandboxField}
    </div>
  )
}
