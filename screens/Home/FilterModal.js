import React from 'react'
import {
    Text,
    View,
    Animated,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from 'react-native'

import { COLORS, SIZES, FONTS, constants, icons } from '../../constants'

import { IconButton } from '../../components'

const FilterModal = ({ isVisible, onClose }) => {


    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current

    const [showFilterModal, setShowFilterModal] = React.useState(isVisible)

    React.useEffect(() => {
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onClose());
        }
    }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height / 8]
    })

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack7
                }}
            >
                {/* Transparent background */}
                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModal(false)}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: modalY,
                        width: '100%',
                        height: '100%',
                        padding: SIZES.padding,
                        borderTopRightRadius: SIZES.padding,
                        borderTopLeftRadius: SIZES.padding,
                        backgroundColor: COLORS.white
                    }}
                >
                    {/* Header */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                ...FONTS.h3,
                                fontSize: 18
                            }}
                        >
                            Filter Your Search
                        </Text>

                        <IconButton
                            containerStyle={{
                                borderWidth: 2,
                                borderRadius: 10,
                                borderColor: COLORS.gray2
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.gray2,
                            }}
                            onPress={() => setShowFilterModal(false)}
                        />
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 250
                        }}
                    >
                        {/* Distance */}

                    </ScrollView>
                </Animated.View>
            </View>
        </Modal>
    )
}

export default FilterModal;