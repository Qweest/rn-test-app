import { Picker as RNPicker } from '@react-native-picker/picker';
import map from 'lodash/map';
import React, { memo, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';

import { useThemeContext } from '../../contexts/theme';
import Modal from '../Modal';
import Text from '../Text';
import { SelectButton } from './styles';
import { PickerOption } from './types';

const isIOS = Platform.OS === 'ios';

interface Props {
  style?: any;
  modalStyle?: any;
  onClose: () => void;
  isVisible: boolean;
  data: PickerOption[];
  firstOption?: PickerOption;
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const Picker: React.FC<Props> = props => {
  const {
    style,
    modalStyle,
    selectedValue,
    onValueChange,
    onClose,
    isVisible,
    data,
    firstOption,
  } = props;
  const { theme } = useThemeContext();
  const ref = useRef<any>();
  const [iosValue, setIosValue] = useState(selectedValue);

  const handleIosSelect = () => {
    onValueChange(iosValue);
    onClose();
  };

  const handleAndroidSelect = (value: string) => {
    onValueChange(value);
    onClose();
  };

  const renderPickerItems = () => {
    const options = firstOption ? [firstOption, ...data] : data;

    return map(options, it => {
      return (
        <RNPicker.Item
          color={theme.text.primary}
          key={it.value}
          label={it.label}
          value={it.value}
        />
      );
    });
  };

  useEffect(() => {
    if (isIOS) {
      setIosValue(selectedValue);
      return;
    }

    if (isVisible) {
      ref.current?.focus();
    } else {
      ref.current?.blur();
    }
  }, [isVisible]);

  return isIOS ? (
    <Modal
      style={[{ height: '40%' }, modalStyle]}
      isVisible={isVisible}
      onClose={onClose}
    >
      <SelectButton onPress={handleIosSelect}>
        <Text style={{ color: theme.text.primary }}>Select</Text>
      </SelectButton>
      <RNPicker
        selectedValue={iosValue}
        onValueChange={setIosValue}
        style={[
          {
            flex: 1,
            backgroundColor: theme.background.secondary,
          },
          style,
        ]}
      >
        {renderPickerItems()}
      </RNPicker>
    </Modal>
  ) : (
    <RNPicker
      selectedValue={selectedValue}
      onValueChange={handleAndroidSelect}
      ref={ref}
      style={[{ display: 'none' }, style]}
    >
      {renderPickerItems()}
    </RNPicker>
  );
};

export default memo(Picker);
