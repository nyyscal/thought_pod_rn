import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import { Link } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center items-center bg-neutral-700 px-6"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View className="w-full max-w-md">
        <Text className="text-3xl font-bold text-center mb-8 text-white">Login</Text>

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
          onPress={handleLogin}
          className="bg-white py-3 rounded-xl mt-6"
        >
          <Text className="text-black text-center text-lg font-semibold">Login</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-400">Don't have an account? </Text>
          <Link href="/signup" asChild>
          <Pressable >
            <Text className="text-blue-400 font-semibold">Sign up</Text>
          </Pressable>
          </Link>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
