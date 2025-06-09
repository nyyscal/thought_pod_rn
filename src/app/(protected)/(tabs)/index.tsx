import { ActivityIndicator, FlatList, Text } from 'react-native';
import React from 'react';
import PostListItem from '@/components/PostListItem';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

const Home = () => {

  const fetchPosts = async()=>{
      const {data,error} = await supabase.from("posts").select("*,user:profiles(*)").throwOnError()
     return data
    }

  const {data, isLoading, error} = useQuery({
    queryKey:["posts"],
    queryFn: fetchPosts
  })

  // const [posts,setPosts] = useState<Post[]>([])

  // useEffect(()=>{
    
  //   fetchPosts()
  // },[])

  // console.log(JSON.stringify(posts,null,2))

  if(isLoading){
    return <ActivityIndicator size={"large"}/>
  }

  if(error){
    return <Text className='text-red-500'>{error.message}</Text>
  }

  return (
      <FlatList
        data={data}
        renderItem={({ item }) => <PostListItem post={item} />}
        // ListHeaderComponent={() => (
        //   <>
        //     <Link href="/new" className="text-blue-500 text-center text-2xl">
        //       New Post
        //     </Link>
        //     </>
        // )}
        ListEmptyComponent={() => (
          <Text className="text-white text-center p-4">No posts yet</Text>
        )}
      />
  );
};

export default Home;
