import React from 'react'
import { Stack } from 'expo-router'

const ProtectedLayout = () => {
  return (
  <Stack >
    <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
    <Stack.Screen name='new' options={{title:"New Threads",presentation:"modal", animation:"slide_from_bottom",headerTitleAlign:"center"}}/>
   </Stack>
    )
}

export default ProtectedLayout