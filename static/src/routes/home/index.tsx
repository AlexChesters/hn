import React, { useState, useEffect } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'

import { Post } from '../../types'

import { topStories } from '../../networking/hn'

const Home = () => {
  const [stories, setStories] = useState<Post[]>(null)
  const [storiesIndex, setStoriesIndex] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  async function fetchData (index: number) {
    setLoading(true)

    const topStoriesData = await topStories(index)

    setStories(topStoriesData.posts)
    setStoriesIndex(topStoriesData.index)

    setLoading(false)
  }

  useEffect(() => {
    fetchData(storiesIndex)
  }, [storiesIndex])

  const seeMore = () => {
    setStoriesIndex(storiesIndex + 1)
  }

  const onPostClick = (post: Post) => {
    window.open(post.link)
  }

  if (loading) {
    return (
      <>
        <Skeleton width='100%' height={100} />
        <Skeleton width='100%' height={100} />
        <Skeleton width='100%' height={100} />
        <Skeleton width='100%' height={100} />
        <Skeleton width='100%' height={100} />
        <Skeleton width='100%' height={100} />
        <Skeleton width='100%' height={100} />
      </>
    )
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
                  <ListItemButton onClick={() => onPostClick(story)}>
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
