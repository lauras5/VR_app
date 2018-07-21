import React, {Component} from 'react';
import {View, Sphere} from 'react-vr';
import SoundShape from './SoundShape';

export default class Sun extends Component {
  render() {
    return(
      <View>
        <SoundShape>
          <Sphere 
            key={'Sun'}
            radius={0.15}
            widthSegments={20}
            heightSegments={20}
            lit={true}
            style={{
              color : '#e9ec1d',
              transform : [{translate: [0.5, -0.5, -2]}, {rotateX: 30}]
            }}
          />
        </SoundShape>
      </View>
    )
  }
};
