import React, { memo, useEffect, useState } from 'react';
import { TextInputProps, TouchableOpacity } from 'react-native';

import { useThemeContext } from '../../contexts/theme';
import { Icon, RemoveIcon, TextInput, Wrapper } from './styles';

interface Props extends TextInputProps {
  style?: any;
  inputStyle?: any;
  icon?: string;
  removable?: boolean;
  onChangeText: (value: string) => void;
}

const Input: React.FC<Props> = props => {
  const {
    style,
    inputStyle,
    icon,
    removable,
    value,
    onChangeText,
    ...inputProps
  } = props;
  const { theme } = useThemeContext();
  const [showClear, setShowClear] = useState<boolean>();

  useEffect(() => {
    setShowClear(!!value);
  }, [value]);

  return (
    <Wrapper style={[{ backgroundColor: theme.background.secondary }, style]}>
      {icon && <Icon color={theme.text.secondary} name={icon} size={20} />}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={theme.text.secondary}
        style={[{ color: theme.text.primary }, inputStyle]}
        {...inputProps}
      />
      {removable && (
        <TouchableOpacity onPress={() => onChangeText('')}>
          <RemoveIcon
            style={{ opacity: showClear ? 1 : 0 }}
            color={theme.text.secondary}
            name="close-circle"
            size={20}
          />
        </TouchableOpacity>
      )}
    </Wrapper>
  );
};

export default memo(Input);
