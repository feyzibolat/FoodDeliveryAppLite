import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    createDrawerNavigator,
    DrawerContentScrollView
} from '@react-navigation/drawer';

import { MainLayout } from '../screens';

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {


    return (

        <View
            style={{
                paddingHorizontal: SIZES.radius
            }}
        >
            {/* Close */}
            <View
                style={{
                }}
            >
                <TouchableOpacity
                    style={{
                    }}
                    onPress={() => navigation.closeDrawer()}
                >
                    <Image
                        source={icons.cart}
                        style={{
                            height: 35,
                            width: 35,
                            tintColor: COLORS.gray
                        }}
                    />
                </TouchableOpacity>
            </View>



        </View>
    )
}

const CustomDrawer = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                drawerType='slide'
                overlayColor='transparent'
                drawerStyle={{
                    flex: 1,
                    width: '65%',
                    paddingRight: 20,
                    backgroundColor: 'transparent'
                }}
                sceneContainerStyle={{
                    flex: 1,
                    backgroundColor: 'transparent'
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    return (
                        <CustomDrawerContent
                            navigation={props.navigation}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer;