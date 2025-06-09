import { router, Tabs } from "expo-router";
import {Feather} from "@expo/vector-icons"
import { View } from "lucide-react-native";
export default function TabsLayout(){
  return <Tabs screenOptions={{ tabBarShowLabel:false, headerTitleAlign:"center", tabBarStyle:{ paddingBottom:10}}}>
    <Tabs.Screen 
    name="index" 
    options={{title:"Home", 
    tabBarIcon:({size,color})=><Feather name="home" size={size} 
    color={color}/>}}/>
    <Tabs.Screen 
    name="search" 
    options={{title:"Search", 
    tabBarIcon:({size,color})=><Feather name="search" size={size} 
    color={color}/>}}/>

    <Tabs.Screen 
    name="plus" 
    options={{title:"Plus", 
      tabBarIcon:({size,color})=>(
      <Feather name="plus" size={size} 
        color={color}/>
  )}}
    listeners={{
      tabPress:(e)=>{
        e.preventDefault()
        router.push("/new")
      }
    }}/>
    <Tabs.Screen 
    name="notifications" 
    options={{title:"Notifications", 
    tabBarIcon:({size,color})=><Feather name="heart" size={size} 
    color={color}/>}}/>
    <Tabs.Screen 
    name="profile" 
    options={{title:"Profile", 
    tabBarIcon:({size,color})=><Feather name="user" size={size} 
    color={color}/>}}/>
  </Tabs>
}