import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 25}px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
`;

export const ScreenTitle = styled.Text`
  color: #fff;
  font-size: 25px;
`;
