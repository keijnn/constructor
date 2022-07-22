import React, { useState } from 'react'
import { useStore } from 'effector-react'

import {
  $board,
  itemDeleted,
  itemSortedUp,
  itemCopied,
  itemSortedDown,
  inputChanged,
  itemActived
} from 'features/constructor'

import bot from 'assets/icons/arrow-bottom.svg'
import top from 'assets/icons/arrow-top.svg'
import copy from 'assets/icons/copy.svg'
import trash from 'assets/icons/trash.svg'



export const ConstructorField = () => {

  const board = useStore($board)
  
  const [status, setStatus] = useState()
  const activedStyle =
    'w-full cursor-pointer px-4 mb-3 rounded-xl h-28 flex flex-col items-center justify-center bg-[#D9E7FF]'
  const disabledStyle =
    'w-full cursor-pointer mb-3 rounded-xl h-24 flex flex-col items-center justify-center bg-white'

  const buttonsActived = 'flex absolute -top-5 right-2 justify-end'
  const buttonsDisabled = 'hidden'

  const inputActived = 'w-full h-8 outline-none p-3'
  const inputDisabled = 'hidden'

  const boardList = board.map((cart, index) => {
    return (
      <div onClick={() => itemActived(cart.id)} key={cart.id} className="relative">
        <div className={status === cart.id ? buttonsActived : buttonsDisabled}>
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
            <img
              onClick={() => itemCopied(cart)}
              className="bg-[#449CF4] p-1"
              src={copy}
              alt="img"
            />
            <img
              onClick={() => itemDeleted(index)}
              className="bg-[#449CF4] p-1"
              src={trash}
              alt="img"
            />
          </div>
        </div>
        <div
          onClick={() => setStatus(cart.id)}
          className={status === cart.id ? activedStyle : disabledStyle}
          key={cart.id}
        >
          <img src={cart.img} alt="img" />
          <p className="mt-2">{cart.title}</p>
          <input
            onChange={(event) => inputChanged(event.target.value)}
            className={status === cart.id ? inputActived : inputDisabled}
          />
        </div>
      </div>
    )
  })

  return (
    <div className="pt-8 max-h-full overflow-auto px-5 col-start-4 p-3 col-end-2 row-span-6 bg-[#F5F5FC]">
      {boardList}
    </div>
  )
}
