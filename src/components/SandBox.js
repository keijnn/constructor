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
          key={item.id}
          class="w-full cursor-pointer mb-3 text-center text-[#97AACD]"
        >
          <div class="whitespace-normal">{item.value}</div>
        </div>
      )
    } 
    if (item.title === 'Button') {
      return (
        <div
          key={item.id}
          class="w-full  mb-3 flex items-center justify-center"
        >
          <div class="cursor-pointer flex items-center justify-center bg-[#4368E0] w-24 h-12 text-white">
            {item.value}
          </div>
        </div>
      )
    } 

    return (
      <div className="w-full cursor-pointer flex justify-center items-center mb-3" key={item.id}>
        <img src={item.value} alt='img' />
      </div>
    )
  })

  return (
    <div className="pt-8 max-w-screen max-h-full overflow-auto px-5 col-start-4 p-3 col-end-7 row-span-6">
      {sandboxField}
    </div>
  )
}
