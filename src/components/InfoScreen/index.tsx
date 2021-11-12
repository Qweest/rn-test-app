import React, { memo } from 'react';

import { useThemeContext } from '../../contexts/theme';
import { Icon, InfoText, Wrapper } from './styles';

interface Props {
  style?: any;
  icon?: string;
  text: string;
}

const InfoScreen: React.FC<Props> = props => {
  const { style, icon, text } = props;
  const { theme } = useThemeContext();

  return (
    <Wrapper style={style}>
      {icon && <Icon color={theme.text.secondary} name={icon} size={72} />}
      <InfoText type="secondary">{text}</InfoText>
    </Wrapper>
  );
};

export default memo(InfoScreen);
