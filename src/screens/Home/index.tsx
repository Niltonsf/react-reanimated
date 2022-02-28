import React, { useEffect } from 'react';
import { Container, Text } from './styles';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

export function Home() {
  const titlePosition = useSharedValue(30);

  useEffect(() => {
    titlePosition.value = withTiming(0, {
      duration: 1000,
      easing: Easing.bounce,
    });
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
    };
  });

  return (
    <Container>
      <Text style={[titleStyle]}>Hello World!</Text>
    </Container>
  );
}
