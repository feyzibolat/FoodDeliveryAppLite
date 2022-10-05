import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView
} from 'react-native';

import Animated from 'react-native-reanimated'

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';

const MainLayout = ({ drawerAnimationStyle }) => {
    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                ...drawerAnimationStyle
            }}
        >
            <Text>MainLayout1</Text>
        </Animated.View>
    )
}

export default MainLayout;