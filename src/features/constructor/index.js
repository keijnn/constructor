import { createStore, createEvent, sample } from 'effector'

const dropIndex = (list, index) => list.slice(0, index).concat(list.slice(index + 1))

const swap = (list, from, to) => {
  [list[from], list[to]] = [list[to], list[from]]
  return list
}

export const itemAdded = createEvent()
export const itemDeleted = createEvent()
export const itemSortedUp = createEvent()
export const itemSortedDown = createEvent()
export const itemCopied = createEvent()
export const inputChanged = createEvent()
export const itemActived = createEvent()



const $currentItem = createStore(0).on(itemActived, (_, id) => id)

export const $board = createStore([])
  .on(itemAdded, (list, item) => list.concat(item))
  .on(itemDeleted, dropIndex)
  .on(itemCopied, (list, item) =>
    list.concat({
      id: Math.random(),
      title: item.title,
      img: item.img,
      value: '1',
    })
  )
  .on(itemSortedUp, (list, index) =>
    index !== 0 ? swap(list.slice(), index, index - 1) : list
  )
  .on(itemSortedDown, (list, index) =>
    index !== list.length - 1 ? swap(list.slice(), index, index + 1) : list
  )

export const $sandbox = createStore([]).on($board, (_, board) => [...board])


sample({
  clock: inputChanged,
  source: { id: $currentItem, items: $board },
  fn: ({ items, id }, value) =>
    items.map((item) => (item.id === id ? { ...item, value } : item)),
  target: $board,
})

