import { Slot } from "expo-router"

import {ThemeProvider,DarkTheme} from "@react-navigation/native"

import "../../global.css"
import { AuthProvider } from "@/providers/AuthProvider"

import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}> 
    <AuthProvider>
    <Slot/>
    </AuthProvider>
    </QueryClientProvider>
    </ThemeProvider>
    )
}