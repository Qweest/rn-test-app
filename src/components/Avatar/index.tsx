import React, { memo } from 'react';

import { Image } from './styles';

interface Props {
  style?: any;
  user: { avatar_url?: string; login: string };
}

const Avatar: React.FC<Props> = props => {
  const { style, user } = props;

  return <Image style={style} source={{ uri: user?.avatar_url }} />;
};

export default memo(Avatar);
