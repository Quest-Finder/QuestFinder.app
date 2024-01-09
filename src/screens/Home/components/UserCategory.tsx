import { View, Text } from 'react-native'
import Categories from './Categories'

const UserCategory = () => {
  return (
    <View className="flex flex-col px-3">
      <Text className="text-2xl font-normal my-4">Estilos preferidos</Text>
      <View className="border p-4 border-gray-300 rounded-lg mb-6 overflow-hidden">
        <Categories
          category1="Categoria #1"
          type1={['Fantasia', 'Mistério', 'Horror', 'Suspense']}
          category2="Categoria #2"
          type2={[
            'O gênio',
            'Masoquista',
            'O gênio',
            'Masoquista',
            'O gênio',
            'Masoquista'
          ]}
        />
      </View>
    </View>
  )
}

export default UserCategory
