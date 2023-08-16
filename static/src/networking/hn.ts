import { Post } from '../types'

const chunkArray = (array: number[], chunkSize: number): number[][] => {
  const chunkedArray: number[][] = []
  while (array.length > 0) {
    chunkedArray.push(array.splice(0, chunkSize))
  }
  return chunkedArray
}

type TopStoriesResponse = {
  posts: Post[],
  index: number
}

export const topStories = async (index = 0): Promise<TopStoriesResponse> => {
  const postIdsRes = await window.fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  const postIdsData: number[] = await postIdsRes.json()

  const chunk = chunkArray(postIdsData, 30)[index]

  const posts = chunk.map((id: number) => {
    return {
      id
    }
  })

  return {
    posts,
    index: 0
  }
}
