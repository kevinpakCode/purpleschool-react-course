import './Input.css'
import { useState } from 'react'

export const Input = ({type='text', onChange, className, defaultValue='', placeholder='', withIcon=false}) => {
  const [fieldValue, setfieldValue] = useState(defaultValue)

  let fieldCl = 'field'
  let boxFiel = 'inputBox'
  if(className) boxFiel += ` ${className}`

  let icon 
  if(withIcon) {
    switch (type) {
    case 'search':
      icon = <img src="./../../../images/icons/search.svg" />
      break
    }
  }

  const handlerChange = e => {
    e.preventDefault()
    const value = e.target.value
    setfieldValue(value)
    if(onChange) onChange(value)
  }

  return (
    <div className={boxFiel}>
      {withIcon&&icon}
      <input type={type} className={fieldCl} placeholder={placeholder} value={fieldValue} onChange={handlerChange}/>
    </div>
  )
}
