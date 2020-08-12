import React from 'react'
import Header from './components/Title'
import NewsSearch from './components/NewsSearch'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Container >
      <Header />
      <NewsSearch />
    </Container>
  )
}

export default App
