import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background-color: #13131a;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(Animated.Text)`
  font-size: 25px;
  color: #fff;
`;

export const Image = styled(Animated.Image)`
  width: 288px;
  height: 200px;
  margin-bottom: 40px;
`;

export const Box = styled(Animated.View)`
  width: 100px;
  height: 100px;
  margin-top: 50px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
