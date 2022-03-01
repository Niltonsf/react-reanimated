import React from 'react';
import { HeaderContainer, ScreenTitle } from './styles';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <ScreenTitle>{title}</ScreenTitle>
    </HeaderContainer>
  );
}
