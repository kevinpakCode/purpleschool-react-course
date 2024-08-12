import './SearchBox.css'
import { Title } from '../../ui/title/Title'
import { Paragraphe } from '../../ui/Paragraphe/Paragraphe'
import { Button } from '../../ui/Button/Button'
import { Input } from '../../ui/Input/Input'
import { useState } from 'react'

export const SearchBox = ({className}) => {
  const [searchKey, setSearchKey] = useState('')

  const parentClassName = 'searchBox'
  let cl = parentClassName
  if(className) cl += ` ${className}`
  

  const handlerSearch = e => {
    e.preventDefault()
    console.log('searchKey==>', searchKey)
  }

  return (
    <div className={cl}>
      <Title>Поиск</Title>
      <Paragraphe >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraphe>
      <form className={`${parentClassName}__form`}>
        <Input type="search" placeholder='Введите название' withIcon={true} defaultValue={searchKey}  onChange={setSearchKey}/>
        <Button onClick={handlerSearch}>Искать</Button>
      </form>
    </div>
  )
}
