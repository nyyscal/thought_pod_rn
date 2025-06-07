import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { dummyPosts } from '@/dummyData'
import PostListItem from '@/components/PostListItem'

const Home = () => {
  return (
    <FlatList
    data={dummyPosts}
    renderItem={({item})=><PostListItem post={item}/>}
    />
  )
}

export default Home