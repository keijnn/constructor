import React from 'react'
import { useStore } from 'effector-react';
import { $sandbox } from 'features/constructor';



export const SandBox = () => {

  const sandbox = useStore($sandbox)
  
  console.log(sandbox)

  const sandboxField = sandbox.map(item => {

    if (item.title === 'Headline') {
      return (
        <div
          className="w-full cursor-pointer mb-3 h-20 flex items-center justify-center font-bold text-xl"
          key={item.id}
        >
          {item.value}
        </div>
      )
    } 

    if (item.title === 'Paragraph') {
      return (
        <div
          className="w-9/12 whitespace-pre cursor-pointer mb-3 h-20 flex items-center justify-center text-[#97AACD]"
          key={item.id}
        >
          {item.value}
        </div>
      )
    } 

    return (
      <div
        className="w-full cursor-pointer mb-3 rounded-xl h-20 flex flex-col items-center justify-center bg-[#D9E7FF]"
        key={item.id}
      >
      </div>
    )
  })

  return (
    <div className="pt-8 max-h-full overflow-auto px-5 col-start-4 p-3 col-end-7 row-span-6">
      {sandboxField}
    </div>
  )
}
