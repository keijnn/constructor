//import modules
import React from 'react'

//import components
import { itemAdded } from 'features/constructor'

//import styles
import style from './field.module.css'

//import icons
import first from 'assets/icons/1.svg'
import second from 'assets/icons/2.svg'
import third from 'assets/icons/3.svg'
import fourth from 'assets/icons/4.svg'

export const ConstructorItems = () => {
  //constructor leftbar items
  const items = [
    { id: 1, title: 'Headline', img: first },
    { id: 2, title: 'Paragraph', img: second },
    { id: 3, title: 'Button', img: third },
    { id: 4, title: 'Image', img: fourth },
  ]

  const list = items.map((item) => {
    return (
      <li
        onClick={() => itemAdded(
          {  
            id: Math.random(), 
            title: item.title, 
            img: item.img 
          }
          )}
        key={item.id}
        className={style.cart}
      >
        <img src={item.img} alt="img" />
        <p className="text-[#252A32] mt-2">{item.title}</p>
      </li>
    )
  })

  return (
    <div className="col-start-1 row-span-6 flex flex-col justify-between items-center">
      <ul className="w-full grid gap-3 grid-cols-2 p-4">{list}</ul>
    </div>
  )
}
