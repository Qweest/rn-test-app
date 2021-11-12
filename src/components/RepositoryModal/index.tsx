import React, { Fragment, memo } from 'react';
import { Linking } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useThemeContext } from '../../contexts/theme';
import { metrics } from '../../styles';
import { RepositoryType } from '../../types';
import Text from '../Text';
import {
  ContentWrapper,
  Description,
  Label,
  Row,
  Title,
  UrlButton,
  UrlText,
} from './styles';

interface Props {
  style?: any;
  data: RepositoryType | undefined;
  onClose: () => void;
}

const RepositoryModal: React.FC<Props> = props => {
  const { style, data, onClose } = props;
  const { theme } = useThemeContext();

  const handleUrlPress = () => {
    if (data?.html_url) {
      Linking.openURL(data.html_url);
    }
  };

  return (
    <Modal
      style={{ margin: 0, justifyContent: 'flex-end' }}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      isVisible={!!data}
      swipeDirection="down"
    >
      <ContentWrapper
        style={[{ backgroundColor: theme.background.secondary }, style]}
      >
        <Title>Repository info</Title>
        <Row>
          <Label>Stars:</Label>
          <Text>{data?.stargazers_count}</Text>
          <Ionicons
            style={{ marginLeft: metrics.spacing * 0.25 }}
            name="star"
            size={18}
            color={theme.text.secondary}
          />
        </Row>
        <Row>
          <Label>Url:</Label>
          <UrlButton
            onPress={handleUrlPress}
            style={{ backgroundColor: theme.background.primary }}
          >
            <UrlText
              style={{ color: theme.background.secondary }}
              numberOfLines={1}
            >
              {data?.html_url}
            </UrlText>
          </UrlButton>
        </Row>
        {data?.description && (
          <Fragment>
            <Row>
              <Label>Description:</Label>
            </Row>
            <Description>{data.description}</Description>
          </Fragment>
        )}
      </ContentWrapper>
    </Modal>
  );
};

export default memo(RepositoryModal);
