//import modules
import React from 'react'

//import components
import { ConstructorList } from './ConstructorList'

//import styles
import style from './field.module.css'

export const ConstructorField = () => {
  return (
    <div className={style.field}>
      <ConstructorList />
    </div>
  )
}
