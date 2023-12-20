import { View, Text, Image } from 'react-native'
import React from 'react'
import Cover from '../../../assets/img/capas.svg'

import { useAuth } from '../../../hooks/useAuth'
import Social from './Social'

const UserData = () => {
  const { user, signOut } = useAuth()
  return (
    <View>
      <Cover width={430} height={192} />
      <View className="flex justify-center items-center -mt-20">
        <Image
          className="w-40 h-40 rounded-full"
          source={{ uri: user?.avatar }}
          alt="Foto do perfil"
        />
        <Text className="text-[#292929] text-2xl my-4">{user?.fullName}</Text>
        <Text className="text-[#656565] text-xl mb-4">
          Aprendiz | Elfo Experiente
        </Text>
        <Social />
        <Text className="text-[#989898] text-xl mb-4">São Paulo | Brasil</Text>
        <Text className="text-black text-xl mb-4">35 anos</Text>
      </View>
    </View>
  )
}

export default UserData
