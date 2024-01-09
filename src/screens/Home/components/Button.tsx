import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface BtnProps {
  title: string
}

const Btn = ({ title }: BtnProps) => {
  return (
    <TouchableOpacity className="w-full items-center justify-center self-center bg-[#095658] py-4 my-4 rounded-md">
      <Text className="text-white font-semibold text-base ">{title}</Text>
    </TouchableOpacity>
  )
}

export default Btn
