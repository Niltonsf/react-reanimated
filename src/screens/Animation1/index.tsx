import React, { useEffect } from 'react';
import { Container, Text, Image, Box, Content } from './styles';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  withSequence,
} from 'react-native-reanimated';
import HeroImg from '../../assets/hero.png';
import { useWindowDimensions } from 'react-native';
import { Header } from '../../components/Header';

export function Animation1() {
  const titlePosition = useSharedValue(30);
  const imagePosition = useSharedValue(-30);
  const boxWidth = useSharedValue(10);
  const titleAppear = useSharedValue(0);

  useEffect(() => {
    boxWidth.value = withTiming(200, { duration: 1000 }, () => {
      titleAppear.value = withTiming(1, {
        duration: 500,
        easing: Easing.bounce,
      });
    });

    imagePosition.value = withTiming(
      0,
      {
        duration: 1000,
      },
      () => {
        titlePosition.value = withSequence(
          withTiming(0, {
            duration: 500,
            easing: Easing.bounce,
          }),
          withTiming(20, {
            duration: 500,
          })
        );
      }
    );
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: titlePosition.value }],
      opacity: interpolate(
        titlePosition.value,
        [30, 0, 20],
        [0, 1, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const boxWidthStyle = useAnimatedStyle(() => {
    return {
      width: boxWidth.value,
    };
  });

  const titleAppearStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        titleAppear.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: imagePosition.value }],
    };
  });

  const { width } = useWindowDimensions();

  return (
    <Container style={{ width }}>
      <Header title="Animation 1" />
      <Content>
        <Image source={HeroImg} style={[heroStyle]} />
        <Text style={[titleStyle]}>Hello World!</Text>
        <Box style={[boxWidthStyle]}>
          <Text style={[{ color: '#000' }, [titleAppearStyle]]}>Press me!</Text>
        </Box>
      </Content>
    </Container>
  );
}
