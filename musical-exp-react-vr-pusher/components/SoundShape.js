import React, {Component} from 'react';
import {
    VrButton, 
    Animated,
} from 'react-vr';

export default class SoundShape extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0)
        };
    }

    // when cursor enters button area, it will change bounce value from 0 to 1 and show a bouncy effect
    animateEnter() {
        Animated.spring(
            this.state.bounceValue, {
                toValue: 1,
                friction: 4,
            }
        ).start();
    }

    // when cursor exits button area, it will change value from 1 to 0 and stop bouncy effect
    animateExit() {
        Animated.timing(
            this.state.bounceValue, {
                toValue: 0,
                duration: 50,
            }
        ).start();
    }

    render() {
        return (
            // Wrap button in Animated.View to change the rotateX transform of view on each state change
            <Animated.View
                style={{
                    transform: [
                        {rotateX: this.state.bounceValue},
                    ],
                }}
            >
                <VrButton
                    onEnter={()=>this.animateEnter()}
                    onExit={()=>this.animateExit()}
                >
                    {this.props.children}
                </VrButton>
            </Animated.View>
        );
    }
};
