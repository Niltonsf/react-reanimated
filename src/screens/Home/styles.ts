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
