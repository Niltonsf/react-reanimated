import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
	Easing,
	withSpring,
	withRepeat,
	withSequence,
} from 'react-native-reanimated';
import { Header } from '../../components/Header';
import { Box, ButtonBox, ButtonBoxTitle, Container, Content, List } from './styles';

export function Animation2() {
  const offset = useSharedValue(0);
	const offset2 = useSharedValue(0);
	const offset3 = useSharedValue(0);
	const sameOffset = useSharedValue(0);
	const rotation = useSharedValue(0);
	const rotation2 = useSharedValue(0);

  const { width } = useWindowDimensions();

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

	const boxStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset2.value * 255 }],
    };
  });

	const boxStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset3.value * 255 }],
    };
  });

	const boxStyle4 = useAnimatedStyle(() => {
    return {
      transform: [
				{ translateX: withSpring(sameOffset.value * 255) },
			],
    };
  });

	const boxStyle5 = useAnimatedStyle(() => {
    return {
      transform: [
				{
          translateX: withSpring(sameOffset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
			],
    };
  });

	const boxStyle6 = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

	const boxStyle7 = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation2.value}deg` }],
    };
  });

  return (
    <Container style={{ width }}>
      <Header title="Animation 2" />
			<List style={{ width }}>
				<Box style={[boxStyle]} />
				<Content>
					<ButtonBox
						onPress={() => {
							offset.value = Math.random();
						}}>
						<ButtonBoxTitle>offset</ButtonBoxTitle>
					</ButtonBox>
				</Content>
				<Box style={[boxStyle2]} />
				<Content>
					<ButtonBox
						onPress={() => {
							offset2.value = withTiming(Math.random(), {
								duration: 500,
							});
						}}>
						<ButtonBoxTitle>offset2</ButtonBoxTitle>
					</ButtonBox>
				</Content>
				<Box style={[boxStyle3]} />
				<Content>
					<ButtonBox
						onPress={() => {
							offset3.value = withTiming(Math.random(), {
								duration: 500,
								easing: Easing.out(Easing.exp),
							});
						}}>
						<ButtonBoxTitle>offset3</ButtonBoxTitle>
					</ButtonBox>
				</Content>
				<Box style={[boxStyle4]} />
				<Box style={[boxStyle5]} />
				<Content>
					<ButtonBox
						onPress={() => {
							sameOffset.value = Math.random();
						}}>
						<ButtonBoxTitle>sameOffset</ButtonBoxTitle>
					</ButtonBox>
				</Content>
				<View style={{ width: '100%', alignItems: 'center' }}>
					<Box style={[boxStyle6]} />
					<Content>
						<ButtonBox
							onPress={() => {
								rotation.value = withRepeat(withTiming(10), 6, true);
							}}>
							<ButtonBoxTitle>rotation</ButtonBoxTitle>
						</ButtonBox>
					</Content>
				</View>
				<View style={{ width: '100%', alignItems: 'center' }}>
					<Box style={[boxStyle7]} />
					<Content>
						<ButtonBox
							onPress={() => {
								rotation2.value = withSequence(
									withTiming(-10, { duration: 50 }),
									withRepeat(withTiming(10, { duration: 100 }), 10, true),
									withTiming(0, { duration: 50 })
								);
							}}>
							<ButtonBoxTitle>rotation2</ButtonBoxTitle>
						</ButtonBox>
					</Content>
				</View>
      </List>
    </Container>
  );
}
