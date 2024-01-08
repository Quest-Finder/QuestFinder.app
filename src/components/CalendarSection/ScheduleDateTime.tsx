import { useCallback, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';

import { getFormattedDateDetails } from '../../utils/Calendar/dateFormatter';

import { HourCard } from './HourCard';

interface DayScheduleProps {
  date: string;
}

export function ScheduleDateTime({ date }: DayScheduleProps) {
  const [hourSelected, setHourSelected] = useState('');
  const { formattedDateInfo } = getFormattedDateDetails(date);

  // FIXME: Buscar as horas disponíveis de acordo com o dia que foi selecionado
  const handleSelectedHour = useCallback(
    (hour: string) => {
      if (hour === hourSelected) {
        setHourSelected('');
      } else {
        setHourSelected(hour);
      }
    },
    [hourSelected],
  );

  const availableHours = [
    '09:00am',
    '10:00am',
    '11:00am',
    '13:00pm',
    '17:00pm',
  ];

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
          data={availableHours}
          renderItem={({ item }) => (
            <HourCard
              key={item}
              text={item}
              onPress={() => handleSelectedHour(item)}
              isSelected={hourSelected === item}
            />
          )}
          keyExtractor={(item) => item}
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
