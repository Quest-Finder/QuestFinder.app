import { View, Text } from 'react-native'

interface CategoriesProps {
  category1: string
  category2: string
  type1: string | string[]
  type2: string | string[]
}

const Categories = ({
  category1,
  category2,
  type1,
  type2
}: CategoriesProps) => {
  const renderCategories = (category: string, types: string | string[]) => {
    if (Array.isArray(types)) {
      const displayedItems = types.slice(0, 2)

      return (
        <View className="flex flex-row w-full gap-1">
          {displayedItems.map((item, index) => (
            <Text
              className={`${
                category === category1 ? 'bg-slate-200' : ''
              } text-slate-800 py-2 px-4 font-medium text-sm`}
              key={index}
            >
              {item}
            </Text>
          ))}
          {types.length > 2 && (
            <Text
              className={` ${
                category === category1 ? 'bg-slate-200' : ''
              } text-slate-800 py-2 px-4 font-medium text-sm`}
            >
              +{types.length - 2}
            </Text>
          )}
        </View>
      )
    } else {
      return <Text>{types}</Text>
    }
  }
  return (
    <View className="flex flex-col">
      <View className="flex flex-row justify-start gap-3 py-4 border-b border-gray-300 items-center">
        <Text className="text-[#3d3d3d] text-base font-normal ">
          {category1}
        </Text>
        {renderCategories(category1, type1)}
      </View>
      <View className="flex flex-row justify-start gap-3 py-4 items-center">
        <Text className="text-[#3d3d3d] text-base font-normal ">
          {category2}
        </Text>
        {renderCategories(category2, type2)}
      </View>
    </View>
  )
}

export default Categories
