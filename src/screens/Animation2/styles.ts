import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #13131a;
`;

export const Box = styled(Animated.View)`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
`;

export const ButtonBox = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  margin-top: 25px;
  background-color: #fff312;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonBoxTitle = styled.Text`
  font-size: 25px;
  color: #000;
`;
