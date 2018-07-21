import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  SpotLight,
  View,
  Sphere
} from 'react-vr';

import Sun from './components/Sun';
import Earth from './components/Earth';
import SoundShape from './components/SoundShape';

export default class musical_exp_react_vr_pusher extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('images/starMap.jpg')}/>

        <Sun/>
        <Earth/>

        <SpotLight intensity={1} style={{transform: [{translate: [1,4,4]}],}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('musical_exp_react_vr_pusher', () => musical_exp_react_vr_pusher);
