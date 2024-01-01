import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { StyleProp, TextStyle } from 'react-native';
import {
  CalendarProps,
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';

import { ptBR } from '../../utils/Calendar/localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export interface MarkedDateProps {
  [date: string]: {
    selected: boolean;
    selectedColor: string;
    selectedTextColor: string;
    customTextStyle?: StyleProp<TextStyle>;
  };
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  return (
    <CustomCalendar
      renderArrow={(direction) =>
        direction === 'left' ? (
          <ChevronLeft className="w-5 h-5 text-[#464646]" strokeWidth={3} />
        ) : (
          <ChevronRight className="w-5 h-5 text-[#464646]" strokeWidth={3} />
        )
      }
      theme={{
        textDayHeaderFontSize: 14,
        dayTextColor: '#989898',
        textDayFontWeight: '400',
        todayTextColor: '#989898',
        textMonthFontSize: 20,
        textMonthFontWeight: 'bold',
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={dayjs().format()}
      hideExtraDays
      monthFormat="MMM yyyy"
      markingType="custom"
      disableAllTouchEventsForDisabledDays={true}
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}
