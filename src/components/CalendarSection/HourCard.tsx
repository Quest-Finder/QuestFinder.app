import { useEffect } from 'react';
import { Pressable, PressableProps } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface HourCardProps extends PressableProps {
  text: string;
  isSelected?: boolean;
}

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export function HourCard({ text, isSelected = false, ...rest }: HourCardProps) {
  const selected = useSharedValue(0);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        selected.value,
        [0, 1],
        ['#EEFFFD', '#095658'],
      ),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(selected.value, [0, 1], ['#003236', '#FFFFFF']),
    };
  });

  useEffect(() => {
    selected.value = withTiming(isSelected ? 1 : 0);
  }, [selected, isSelected]);

  return (
    <PressableAnimated
      style={animatedContainerStyle}
      className={'items-center justify-center p-4 rounded-md bg-[#EEFFFD]'}
      {...rest}
    >
      <Animated.Text
        style={animatedTextStyle}
        className={'font-medium text-sm leading-6 text-[#003236]'}
      >
        {text}
      </Animated.Text>
    </PressableAnimated>
  );
}
