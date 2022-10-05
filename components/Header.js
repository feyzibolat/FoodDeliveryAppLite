import React from 'react';
import {
    View,
    Text
} from 'react-native'
import { FONTS } from '../constants'

const Header = ({ containerStyle, title }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {/* Left */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ ...FONTS.h3 }}>{title}</Text>
            </View>

            {/* Title */}

            {/* Right */}

        </View>
    )
}

export default Header;