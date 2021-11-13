import React, { memo } from 'react';
import RNModal from 'react-native-modal';

import { useThemeContext } from '../../contexts/theme';
import { ContentWrapper, SwipeLine } from './styles';

interface Props {
  style?: any;
  onClose: () => void;
  isVisible: boolean;
  swipeDirection?: 'down' | 'up';
}

const Modal: React.FC<Props> = props => {
  const { style, onClose, children, isVisible, swipeDirection } = props;
  const { theme } = useThemeContext();

  return (
    <RNModal
      style={{ margin: 0, justifyContent: 'flex-end' }}
      scrollOffset={110}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      isVisible={isVisible}
      swipeDirection={swipeDirection}
    >
      <ContentWrapper
        style={[{ backgroundColor: theme.background.secondary }, style]}
      >
        {swipeDirection && (
          <SwipeLine style={{ backgroundColor: theme.text.secondary }} />
        )}
        {children}
      </ContentWrapper>
    </RNModal>
  );
};

export default memo(Modal) as React.FC<Props>;
