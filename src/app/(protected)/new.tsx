import { View, Text, TextInput,Pressable, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import {SafeAreaView} from "react-native-safe-area-context"
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/providers/AuthProvider'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'

const createPost = async(content:string,user_id:string) =>{
  const {data} = await supabase.from("posts")
  .insert({content,user_id})
  .select("*")
  .throwOnError()
  
  return data
}

const NewPostScreen = () => {
  const [text,setText] = useState("")
  const {user} = useAuth()

  const queryClient = useQueryClient()

 const {mutate, isPending,error} = useMutation({
    mutationFn: ()=>createPost(text,user!.id),
    onSuccess:(data)=>{
      setText("")
      router.back()
      queryClient.invalidateQueries({queryKey:["posts"]})
    },
    onError:(error)=>{
      Alert.alert(error.message)
    }
  })

  return (
    <SafeAreaView edges={["bottom"]} className='p-4 flex-1'>
      <KeyboardAvoidingView className='flex-1' behavior={Platform.OS === "ios"? "padding":"height"}
      keyboardVerticalOffset={Platform.OS === "ios"?140:0}
      >

      <Text className='text-white font-boldtext-lg'>username</Text>

      <TextInput 
      value={text}
      onChangeText={setText}
      placeholder='What is on your mind?' 
      placeholderTextColor="white"
      className='text-white text-lg'
      multiline numberOfLines={4}/>

      <TextInput 
      placeholder='What is on your mind?' 
      placeholderTextColor="white"
      secureTextEntry={true}
      className='text-white text-lg'
      multiline numberOfLines={4}/>

      {error && <Text className='text-red-500'>{error.message}</Text>}

      <View className='mt-auto'>
        <Pressable onPress={()=>mutate()} disabled={isPending} className='bg-white p-3 self-end rounded-full px-6'>
          <Text className='text-black font-bold'>Post</Text>
        </Pressable>
      </View>

      {/* <TouchableOpacity className='text-white' onPress={()=>router.back()}>
        <Text className='text-white p-4'>Back</Text>
        </TouchableOpacity> */}
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default NewPostScreen