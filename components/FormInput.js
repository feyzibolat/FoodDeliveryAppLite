import React from 'react'
import {
    View,
    Text,
    TextInput
} from 'react-native'

import { COLORS, SIZES, FONTS } from '../constants'

const FormInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    inputStyle,
    prependComponent,
    appendComponent,
    onChange,
    secureTextEntry,
    keyboardType = 'default',
    autoCompleteType = 'off',
    autoCapitalize = 'none',
    errorMsg = "",
    maxLength,
    value = "",
}) => {
    return (
        <View
            style={{
                ...containerStyle,
            }}
        >
            {/* Label & Error msg */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}
                >
                    {label}
                </Text>

                <Text
                    style={{
                        color: COLORS.red,
                        ...FONTS.body4
                    }}
                >
                    {errorMsg}
                </Text>
            </View>

            {/* Text Input */}
            <View
                style={{
                    flexDirection: 'row',
                    height: SIZES.height > 800 ? 55 : 45,
                    paddingHorizontal: SIZES.padding,
                    marginTop: SIZES.height > 800 ? SIZES.base : 0,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {prependComponent}

                <TextInput
                    style={{
                        flex: 1,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}
                />

                {appendComponent}

            </View>

        </View>
    )
}

export default FormInput;