import React, { memo } from 'react';
import { TextProps } from 'react-native';

import { useThemeContext } from '../../contexts/theme';
import { Wrapper } from './styles';

interface Props extends TextProps {
  style?: any;
  type?: 'primary' | 'secondary';
}

const Text: React.FC<Props> = props => {
  const { children, style, type = 'primary', ...textProps } = props;
  const { theme } = useThemeContext();

  return (
    <Wrapper
      style={[
        {
          color: type === 'primary' ? theme.text.primary : theme.text.secondary,
        },
        style,
      ]}
      {...textProps}
    >
      {children}
    </Wrapper>
  );
};

export default memo(Text);
