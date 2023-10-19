import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import LoginCard from './components/LoginCard'

import Logo from '../../assets/img/logo.svg'

const Login = () => {
  return (
    <SafeAreaView className="justify-start items-center h-full w-full mt-20">
      <Logo width={156} height={70} />
      <Text className="font-bold text-lg mt-4 mb-8">Entrar</Text>
      <View className="w-[90%] items-center mb-4">
        <LoginCard name="Google" />
        <LoginCard name="Discord" />
        <LoginCard name="Facebook" />
        <LoginCard name="Twich" />
      </View>
      <View className="h-px w-60 bg-gray-600 mb-4"></View>
      <Text className="text-gray-800 font-bold text-sm">Precisa de Ajuda?</Text>
    </SafeAreaView>
  )
}

export default Login
