import React, { useState, useEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

import { Post } from '../../types'

import { topStories } from '../../networking/hn'

const Home = () => {
  const [stories, setStories] = useState<Post[]>(null)
  const [storiesIndex, setStoriesIndex] = useState<number>(0)

  async function fetchData (index: number) {
    const topStoriesData = await topStories(index)

    setStoriesIndex(topStoriesData.index)
    setStories(topStoriesData.posts)
  }

  useEffect(() => {
    fetchData(storiesIndex)
  }, [])

  if (!stories) return null

  return (
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
  )
}

export default Home
