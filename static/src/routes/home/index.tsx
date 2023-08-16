import React, { useState, useEffect } from 'react'
// import { useUpdateEffect } from 'react-use'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

import { Post } from '../../types'

import { topStories } from '../../networking/hn'

const Home = () => {
  const [stories, setStories] = useState<Post[]>(null)
  const [storiesIndex, setStoriesIndex] = useState<number>(0)

  async function fetchData (index: number) {
    const topStoriesData = await topStories(index)

    setStories(topStoriesData.posts)
    setStoriesIndex(topStoriesData.index)
  }

  useEffect(() => {
    fetchData(storiesIndex)
  }, [storiesIndex])

  const seeMore = () => {
    console.log('see more')
    setStoriesIndex(storiesIndex + 1)
  }

  if (!stories) return null

  return (
    <>
      <List>
        {
          stories.map((story, index) => {
            return (
              <div key={index}>
                <ListItem>
                  <ListItemButton>
                    <ListItemText>{story.title}</ListItemText>
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            )
          })
        }
      </List>
      <Button onClick={() => seeMore()}>See more</Button>
    </>
  )
}

export default Home
