import { Slot } from "expo-router"

import {ThemeProvider,DarkTheme} from "@react-navigation/native"

const myTheme ={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    primary:"white"
  }
}

export default function RootLayout(){
  console.log("Root Layout!")
  return (
  <ThemeProvider value={myTheme}>
    <Slot/> //page we are rendering
    </ThemeProvider>
    )
}