import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from '../'
import { FONTS, SIZES, COLORS, icons } from '../../constants'
import {
    FormInput,
    TextButton,
    TextIconButton
} from '../../components'
import { utils } from '../../utils';

const SignUp = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)

    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")

    function isEnableSignup() {
        return email != "" && username != "" && password != "" && emailError == "" && usernameError == "" && passwordError == ""
    }

    return (
        <AuthLayout
            title="Getting Started"
            subtitle="Create an account to continue!"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >
            {/* FormInput And SignUp */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />

                <FormInput
                    label="Username"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={username == "" || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }
                />


                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* Sign Up & Sign In */}
                <TextButton
                    label="Sign Up"
                    disabled={isEnableSignup() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignup() ? COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={() => navigation.navigate("Otp")}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
                        Already have an account?
                    </Text>
                    <TextButton
                        label="Sign In"
                        buttonContainerStyle={{
                            backgroundColor: null,
                            marginLeft: 3,
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>

            {/* Footer */}
            <View>
                {/* Facebook */}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                    }}
                    icon={icons.fb}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.white
                    }}
                    label="Continue With Facebook"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.white
                    }}
                    onPress={() => console.log("FB")}
                />

                {/* Google */}
                <TextIconButton
                    containerStyle={{
                        height: 50,
                        alignItems: 'center',
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                    }}
                    icon={icons.google}
                    iconPosition="LEFT"
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                    label="Continue With Google"
                    labelStyle={{
                        marginLeft: SIZES.radius,
                        color: COLORS.black
                    }}
                    onPress={() => console.log("Google")}
                />
            </View>
        </AuthLayout>
    )
}

export default SignUp;