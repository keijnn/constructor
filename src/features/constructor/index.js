//import modules
import { createStore, createEvent, sample } from 'effector'

//delete logic
const dropIndex = (list, index) => list.slice(0, index).concat(list.slice(index + 1))

//sort logit
const swap = (list, from, to) => {
  [list[from], list[to]] = [list[to], list[from]]
  return list
}

//events
export const itemAdded = createEvent()
export const itemDeleted = createEvent()
export const itemSortedUp = createEvent()
export const itemSortedDown = createEvent()
export const itemCopied = createEvent()
export const inputChanged = createEvent()
export const itemActived = createEvent()


//current item id
const $currentItem = createStore(0).on(itemActived, (_, id) => id)

//board state with 
export const $board = createStore([])
  .on(itemAdded, (list, item) => list.concat(item)) //added
  .on(itemDeleted, dropIndex) //deleted
  .on(itemCopied, (list, item) => //copied
    list.concat({
      id: Math.random(), //new id
      title: item.title,
      img: item.img,
    })
  )
  .on(itemSortedUp, (list, index) => //moved higher
    index !== 0 
      ? swap(list.slice(), index, index - 1) 
      : list
  )
  .on(itemSortedDown, (list, index) => //moved below
    index !== list.length - 1 
      ? swap(list.slice(), index, index + 1) 
      : list
  )

//sandbox state 
export const $sandbox = createStore([]).on($board, (_, board) => [...board])

//input changed for unique id
sample({
  clock: inputChanged, //input active
  source: { id: $currentItem, items: $board }, //get current id and all items
  fn: ({ items, id }, value) => // find id and change his value
    items.map((item) => (item.id === id ? { ...item, value } : item)),
  target: $board, 
})

