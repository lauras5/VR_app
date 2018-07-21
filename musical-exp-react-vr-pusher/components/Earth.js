import React, {Component} from 'react';
import {View, Sphere} from 'react-vr';
import SoundShape from './SoundShape';

export default class Earth extends Component {
  render() {
    return(
      <View>
        <SoundShape>
          <Sphere 
            key={'Earth'}
            radius={0.10}
            widthSegments={20}
            heightSegments={20}
            lit={true}
            style={{
              color : '#e9ec1d',
              transform : [{translate: [2, -0.5, -2]}, {rotateX: 30}]
            }}
          />
        </SoundShape>
      </View>
    )
  }
};
