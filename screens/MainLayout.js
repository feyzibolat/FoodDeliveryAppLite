import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';

const MainLayout = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>MainLayout1</Text>
            <Image
                source={icons.cart}
                style={{
                    height: 35,
                    width: 35,
                    tintColor: COLORS.red
                }}
            />
        </View>
    )
}

export default MainLayout;