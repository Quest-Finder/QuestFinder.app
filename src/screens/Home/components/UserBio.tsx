import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Btn from './Button'

const UserBio = () => {
  const initialMaxChars = 206
  const [showFullBio, setShowFullBio] = useState(false)

  const bioText =
    'Olá! Bem vindo ao meu continente! Fique à vontade puxe uma cadeira e aceite um pouco do nosso melhor hidromel! Meu nome é Rodrigo, alguns me chamam de Rodrastky, jogo RPG desde os 12 anos e adoro criar histórias e cenários. Sou designer gráfico gosto de desenhar meus próprios mapas e cenários, contar minhas histórias'

  const truncatedBio = showFullBio ? bioText : bioText.slice(0, initialMaxChars)
  const shouldShowEllipsis = bioText.length > initialMaxChars && !showFullBio

  const toggleShowFullBio = () => {
    setShowFullBio(!showFullBio)
  }
  return (
    <View className="flex flex-col px-3">
      <Text className="text-2xl font-normal my-4">Bio</Text>
      <View className="flex flex-col justify-center items-center border p-4 border-gray-300 rounded-lg mb-6">
        <Text className="font-bold text-xl">
          Mestre Rodrigo <Text className="font-medium">| Elfo Experiente</Text>{' '}
        </Text>
        <Text className="text-[#989898] font-normal text-base mb-4">
          “A vida não tem graça sem alguns dragões :)”
        </Text>
        <Text className="text-[#989898] font-normal text-base mb-8">
          {truncatedBio}
          {shouldShowEllipsis && '...'}
        </Text>
        {bioText.length > initialMaxChars && (
          <TouchableOpacity className=" self-end" onPress={toggleShowFullBio}>
            <Text className="text-[#292929] font-medium text-base">
              {showFullBio ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Btn title="Enviar Mensagem" />
    </View>
  )
}

export default UserBio
