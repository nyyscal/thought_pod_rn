import { FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import PostListItem from '@/components/PostListItem';
import { Link } from 'expo-router';
import { Post } from '@/types';
import { supabase } from '@/lib/supabase';

const Home = () => {
  const [posts,setPosts] = useState<Post[]>([])

  useEffect(()=>{
    const fetchPosts = async()=>{
      const {data,error} = await supabase.from("posts").select("*,user:profiles(*)")
      if(error){
        console.error(error)
      }
      setPosts(data as Post[])
    }
    fetchPosts()
  },[])

  console.log(JSON.stringify(posts,null,2))
  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        ListHeaderComponent={() => (
          <>
            <Link href="/new" className="text-blue-500 text-center text-2xl">
              New Post
            </Link>
            </>
        )}
        ListEmptyComponent={() => (
          <Text className="text-white text-center p-4">No posts yet</Text>
        )}
      />
  );
};

export default Home;
