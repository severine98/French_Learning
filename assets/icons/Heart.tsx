import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Heart = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
    </Svg>
  );
};

export {Heart};
