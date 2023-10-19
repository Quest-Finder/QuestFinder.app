import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface LoginCardProps {
  name: string
}

const LoginCard = ({ name }: LoginCardProps) => {
  return (
    <TouchableOpacity className="bg-gray-400 w-full items-center py-4 rounded-md mb-4">
      <Text className="text-white font-semibold text-lg">
        Entrar com {name}
      </Text>
    </TouchableOpacity>
  )
}

export default LoginCard
