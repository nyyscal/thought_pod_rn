import { View, Text, TouchableOpacity, TextInput,Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import {SafeAreaView} from "react-native-safe-area-context"

const NewPostScreen = () => {
  const [text,setText] = useState("")
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

      <View className='mt-auto'>
        <Pressable onPress={()=> console.log(`post:${text}`)} className='bg-white p-3 self-end rounded-full px-6'>
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