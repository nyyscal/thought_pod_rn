import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Link } from 'expo-router';
import { supabase } from '@/lib/supabase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async() => {
    if(!email||!password){
      Alert.alert("Please enter an email and password")
      return
    }
    try {
      setIsLoading(true)
      const {data:{session},error}= await supabase.auth.signUp({email,password})

  if(error) Alert.alert(error.message)
  if(!session) Alert.alert("Please check your inbox for email verification!")
  setIsLoading(false)
  console.log('Logging in with:', email, password);
    } catch (error) {
      console.log("Login error:",error)
    }finally{
      setIsLoading(false)
    }
  };


  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-neutral-700 px-6"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View className="w-full max-w-md">
        <Text className="text-3xl font-bold text-center mb-8 text-white">Create an Account</Text>

        <View className="gap-4">
          <View>
            <Text className="text-sm font-medium text-gray-300 mb-1">Email</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#6B7280"
              value={email}
              onChangeText={setEmail}
              className="w-full border border-gray-700 rounded-xl px-4 py-3 text-base text-white bg-neutral-900"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="text-sm font-medium text-gray-300 mb-1">Password</Text>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#6B7280"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="w-full border border-gray-700 rounded-xl px-4 py-3 text-base text-white bg-neutral-900"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSignup}
          disabled={isLoading}
          className="bg-white py-3 rounded-xl mt-6"
        >
          <Text className="text-black text-center text-lg font-semibold">{isLoading? "Loggin in..." : "Sign up"}</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-400">Already have an account? </Text>
          <Link href="/login" asChild>
          <TouchableOpacity>
            <Text className="text-blue-400 font-semibold">Login</Text>
          </TouchableOpacity>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
