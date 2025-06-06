import { Slot } from "expo-router"

import {ThemeProvider,DarkTheme} from "@react-navigation/native"

import "../../global.css"

const myTheme ={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    primary:"white",
    card:"#101010"
  }
}

export default function RootLayout(){
  console.log("Root Layout!")
  return (
  <ThemeProvider value={myTheme}>
    <Slot/>
    </ThemeProvider>
    )
}