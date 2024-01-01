import { useState } from 'react';
import { Button, FlatList, Pressable, Text, View } from 'react-native';

import { getFormattedDateDetails } from '../../utils/Calendar/dateFormatter';

interface HoursAvailableProps {
  date: string;
}

/* TODO: FIX COMPONENTE DE HORAS DISPONIVEIS */

export function AvailableTimes({ date }: HoursAvailableProps) {
  const [hourSelected, setHourSelected] = useState('');

  const { formattedDateInfo } = getFormattedDateDetails(date);

  return (
    <View className="justify-between my-8 pl-6 ">
      <View className="flex-row items-center mb-8">
        <View className="mr-4">
          <Text className="text-base leading-8 font-medium text-[#095658]">
            Horas disponíveis:
          </Text>
          <Text className="text-xs leading-8 text-[#525252]">
            {formattedDateInfo}
          </Text>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 11,
            paddingRight: 40,
          }}
          horizontal
          data={['09:00am', '10:00am', '11:00am']}
          renderItem={({ item }) => (
            <Pressable
              key={item}
              className={`w-20 h-14 ${
                hourSelected === item ? 'bg-[#095658]' : 'bg-[#EEFFFD]'
              } rounded-md items-center justify-center transition-colors`}
              onPress={() => setHourSelected(item)}
            >
              <Text
                className={`font-medium text-sm leading-6 ${
                  hourSelected === item ? 'text-white' : 'text-[#003236]'
                } transition-colors`}
              >
                {item}
              </Text>
            </Pressable>
          )}
        />
      </View>

      {/**
       * FIXME: Botão de agendar um horário
       * TODO: Google API Calendars
       */}
      <Button
        title="Agendar"
        onPress={() => {}}
        disabled={hourSelected.length === 0}
      />
    </View>
  );
}
