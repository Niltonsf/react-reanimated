import React, { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { Container, Content, Box, ButtonBox, ButtonBoxTitle } from './styles';
import { Header } from '../../components/Header';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export function Animation2() {
  const offset = useSharedValue(0);

  const { width } = useWindowDimensions();

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <Container style={{ width }}>
      <Header title="Animation 2" />
      <Box style={[boxStyle]} />
      <Content>
        <ButtonBox
          onPress={() => {
            offset.value = withTiming(Math.random(), {
              duration: 500,
            });
          }}>
          <ButtonBoxTitle>Press me!</ButtonBoxTitle>
        </ButtonBox>
      </Content>
    </Container>
  );
}
