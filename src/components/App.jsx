import "./App.css"
import { Header } from "./layouts/Header/Header"
import { Main } from './layouts/Main/Main'
import { Container } from "./layouts/Commons/Container/Container"
import { SearchBox } from "./commons/SearchBox/SearchBox"

const App = () => {

  return (
    <div className="app">
      <Header />
      <Main>
        <section className="search-section">
          <Container>
            <SearchBox className="search-section__box"/>
          </Container>
        </section>

        <section className="movies-section">
          <Container></Container>
        </section>
      </Main>
    </div>
  )
}

export default App
