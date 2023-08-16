import React, { useEffect } from 'react'

import { topStories } from '../../networking/hn'

const Home = () => {
  async function fetchData () {
    console.log(await topStories())
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <h1>Hello, world!</h1>
  )
}

export default Home
