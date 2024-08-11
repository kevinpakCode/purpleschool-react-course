import "./App.css"
import { Button } from "./ui/Button/Button"
import { Paragraphe } from "./ui/Paragraphe/Paragraphe"
import { Title } from "./ui/title/Title"

function App() {


  return (
    <div className="app">
      <div className="app__container">
        <Title>Поиск</Title>
        <Paragraphe >Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraphe>
        <Button>Искать</Button>
      </div>
    </div>
  )
}

export default App
