import { View, FlatList, SafeAreaView, Text } from 'react-native';
import React from 'react';
import { dummyPosts } from '@/dummyData';
import PostListItem from '@/components/PostListItem';
import { Link } from 'expo-router';

const Home = () => {
  return (
      <FlatList
        data={dummyPosts}
        renderItem={({ item }) => <PostListItem post={item} />}
        ListHeaderComponent={() => (
          <>
            <Link href="/new" className="text-blue-500 text-center text-2xl">
              New Post
            </Link>
            <Link href="/login" className='text-blue-500 p-4'>Login</Link>
            </>
        )}
        ListEmptyComponent={() => (
          <Text className="text-white text-center p-4">No posts yet</Text>
        )}
      />
  );
};

export default Home;
