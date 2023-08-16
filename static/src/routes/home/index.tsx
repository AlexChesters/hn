import React, { useState, useEffect } from 'react'

import Example from './components/Example'

type Data = {
  title?: string,
  subtitle?: string
}

const Home = () => {
  const [data, setData] = useState<Data>({})

  async function fetchData () {
    const res = await window.fetch('https://www.reddit.com/r/all.json')
    const data = await res.json()
    const firstItem = data.data.children[0].data

    setData({
      title: firstItem.title,
      subtitle: firstItem.subreddit_name_prefixed
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Example
      title={data.title}
      subtitle={data.subtitle}
    />
  )
}

export default Home
