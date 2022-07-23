//import modules
import React, { useState } from 'react'
import { useStore } from 'effector-react'

//import state
import { $board } from 'features/constructor'

//import events
import {
  itemDeleted,
  itemSortedUp,
  itemCopied,
  itemSortedDown,
  inputChanged,
  itemActived,
} from 'features/constructor'

//import styles
import style from './field.module.css'

//import icons
import bot from 'assets/icons/arrow-bottom.svg'
import top from 'assets/icons/arrow-top.svg'
import copy from 'assets/icons/copy.svg'
import trash from 'assets/icons/trash.svg'

export const ConstructorList = () => {
  const board = useStore($board)

  const [status, setStatus] = useState()

  const boardList = board.map((cart, index) => (
    <div onClick={() => itemActived(cart.id)} key={cart.id} className="relative">
      <div className={status === cart.id ? style.activeButton : 'hidden'}>
        <div className="flex mr-2 p-0">
          <img
            onClick={() => itemSortedDown(index)}
            className="bg-[#449CF4] p-1"
            src={bot}
            alt="img"
          />
          <img
            onClick={() => itemSortedUp(index)}
            className="bg-[#449CF4] p-1"
            src={top}
            alt="img"
          />
        </div>
        <div className="flex p-0">
          <img onClick={() => itemCopied(cart)} className="bg-[#449CF4] p-1" src={copy} alt="img" />
          <img
            onClick={() => itemDeleted(index)}
            className="bg-[#449CF4] p-1"
            src={trash}
            alt="img"
          />
        </div>
      </div>
      <div
        onClick={() => {setStatus(cart.id)}}
        className={status === cart.id ? style.isActive : style.isDisable}
        key={cart.id}
      >
        <img src={cart.img} alt="img" />
        <p className="mt-2">{cart.title}</p>
        <input
          onChange={(event) => inputChanged(event.target.value)}
          className={status === cart.id ? style.inputActive : 'hidden'}
        />
      </div>
    </div>
  ))
  return <div>{boardList}</div>
}
