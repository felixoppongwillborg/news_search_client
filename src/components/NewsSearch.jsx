import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const NewsSearch = () => {
  return (
    <>
      <Input
        type="text"
        data-cy="news-search"
        placeholder="Input search term" />
      <Button
        data-cy="search-submit">
        Search
        </Button>
    </>
  )
}

export default NewsSearch
