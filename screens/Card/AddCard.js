import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
    Header,
    IconButton,
    TextButton,
    FormInput,
    FormInputCheck,
    RadioButton,
} from '../../components';
import { FONTS, SIZES, COLORS, icons, images } from '../../constants';
import { utils } from '../../utils';


const AddCard = ({ navigation, route }) => {

    const [selectedCard, setSelectedCard] = React.useState(null)
    const [cardNumber, setCardNumber] = React.useState("")
    const [cardNumberError, setCardNumberError] = React.useState("")
    const [cardName, setCardName] = React.useState("")
    const [cardNameError, setCardNameError] = React.useState("")
    const [expiryDate, setExpiryDate] = React.useState("")
    const [expiryDateError, setExpiryDateError] = React.useState("")
    const [cvv, setCvv] = React.useState("")
    const [cvvError, setCvvError] = React.useState("")
    const [isRemember, setIsRemember] = React.useState(false)

    React.useEffect(() => {
        let { selectedCard } = route.params

        setSelectedCard(selectedCard)
    }, [])

    function isEnableAddCard() {
        return cardNumber != "" && cardName != "" && expiryDate != "" && cvv != "" && cardNumberError == "" && cardNameError == "" && expiryDateError == "" && cvvError == ""
    }

    function renderHeader() {
        return (
            <Header
                title="ADD NEW CARD"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.lightOrange2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <View
                        style={{
                            width: 40
                        }}
                    />
                }
            />
        )
    }

    function renderCard() {
        return (
            <ImageBackground
                source={images.card}
                style={{
                    height: 200,
                    width: '100%',
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden'
                }}
            >
                {/* Logo */}
                <Image
                    source={selectedCard?.icon}
                    resizeMode='contain'
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        height: 40,
                        width: 80
                    }}
                />

                {/* Details */}
                <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 0,
                        right: 0,
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                    >
                        {cardName}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>{cardNumber}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{expiryDate}</Text>
                    </View>
                </View>

            </ImageBackground>
        )
    }

    function renderForms() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding * 2
                }}
            >
                {/* Card Number */}
                <FormInput
                    label="Card Number"
                    keyboardType='number-pad'
                    value={cardNumber}
                    maxLength={19}
                    onChange={(value) => {
                        setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
                        utils.validateInput(value, 19, setCardNumberError)
                    }}
                    errorMsg={cardNumberError}
                    appendComponent={
                        <FormInputCheck
                            value={cardNumber}
                            error={cardNumberError}
                        />
                    }
                />

                {/* Cardholder Name */}
                <FormInput
                    label="Cardholder Name"
                    value={cardName}
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validateInput(value, 1, setCardNameError)
                        setCardName(value)
                    }}
                    errorMsg={cardNameError}
                    appendComponent={
                        <FormInputCheck
                            value={cardName}
                            error={cardNameError}
                        />
                    }
                />

                {/* Expiry Date / CVV */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius
                    }}
                >

                    {/* Expiry Date */}
                    <FormInput
                        label="Expiry Date"
                        value={expiryDate}
                        placeholder="MM/YY"
                        maxLength={5}
                        containerStyle={{
                            flex: 1,
                        }}
                        onChange={(value) => {
                            utils.validateInput(value, 5, setExpiryDateError)
                            setExpiryDate(value)
                        }}
                        errorMsg={expiryDateError}
                        appendComponent={
                            <FormInputCheck
                                value={expiryDate}
                                error={expiryDateError}
                            />
                        }
                    />

                    {/* CVV */}
                    <FormInput
                        label="CVV"
                        value={cvv}
                        maxLength={3}
                        containerStyle={{
                            flex: 1,
                            marginLeft: SIZES.radius,
                        }}
                        onChange={(value) => {
                            utils.validateInput(value, 3, setCvvError)
                            setCvv(value)
                        }}
                        errorMsg={cvvError}
                        appendComponent={
                            <FormInputCheck
                                value={cvv}
                                error={cvvError}
                            />
                        }
                    />
                </View>

                {/* Remember */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        marginTop: SIZES.padding
                    }}
                >
                    <RadioButton
                        label="Remember this card details."
                        isSelected={isRemember}
                        onPress={() => setIsRemember(!isRemember)}
                    />
                </View>
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    paddingTop: SIZES.radius,
                    paddingBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                <TextButton
                    label="Add Card"
                    disabled={!isEnableAddCard()}
                    buttonContainerStyle={{
                        height: 60,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => navigation.goBack()}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Card */}
                {renderCard()}

                {/* Forms */}
                {renderForms()}

            </KeyboardAwareScrollView>

            {/* Footer */}
            {renderFooter()}

        </View>
    )
}

export default AddCard;