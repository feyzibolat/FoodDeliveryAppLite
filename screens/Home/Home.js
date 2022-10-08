import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';

import { FlatList } from 'react-native-gesture-handler'

import {
    HorizontalFoodCard,
    VerticalFoodCard
} from '../../components'

import { FONTS, SIZES, COLORS, icons, dummyData } from '../../constants'

const Section = ({ title, onPress, children }) => {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20
                }}
            >
                <Text style={{ flex: 1, ...FONTS.h3 }}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>

            {children}
        </View>
    )
}

const Home = () => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [recommends, setRecommends] = React.useState([])
    const [popular, setPopular] = React.useState([])
    const [menuList, setMenuList] = React.useState([])

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])

    // Handler

    function handleChangeCategory(categoryId, menuTypeId) {
        // Popular the recommends menu
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

        // Retrieve the recommends menu
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

        // Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id === menuTypeId)

        // Set the Popular menu based on the categoryId
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))

        // Set the recommends menu based on the categoryId
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        // Set the menu based on the categoryId
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))

    }

    // Render


    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}
                />

                {/* Text Input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="Search Food"
                />

                {/* Filter Button */}
                <TouchableOpacity
                // onPress
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId, item.id)
                        }}
                    >
                        <Text
                            style={{
                                color: selectedMenuType == item.id ? COLORS.lightOrange : COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

    function renderRecommendedSection() {
        return (
            <Section
                title={"Recommended"}
                onPress={() => console.log("Show all recommended")}
            >
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <FlatList
                        data={recommends}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (

                            <HorizontalFoodCard
                                containerStyle={{
                                    flex: 1,
                                    height: 180,
                                    width: SIZES.width * 0.85,
                                    marginLeft: index == 0 ? SIZES.padding : 18,
                                    marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                    paddingRight: SIZES.radius,
                                    alignItems: 'center'
                                }}
                                imageStyle={{
                                    marginTop: 35,
                                    height: 150,
                                    width: 150
                                }}
                                item={item}
                                onPress={() => console.log("HorizontalFoodCard")}
                            />
                        )}
                    />
                </View>
            </Section>
        )
    }

    function renderPopularSection() {
        return (
            <Section
                title="Popular Near You"
                onPress={() => console.log("Popular")}
            >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == popular.length - 1 ? SIZES.padding : 0
                            }}
                            item={item}
                            onPress={() => console.log("Vertical Food Card")}
                        />
                    )}
                />
            </Section>
        )
    }

    function renderFoodCategories() {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            height: 55,
                            marginTop: SIZES.padding,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                        }}
                        onPress={() => {
                            setSelectedCategoryId(item.id)
                            handleChangeCategory(item.id, selectedMenuType)
                        }}
                    >
                        <Image
                            source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width: 50
                            }}
                        />

                        <Text
                            style={{
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                                ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

    function renderDeliveryTo() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            >
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.body3
                    }}
                >
                    DELIVERY TO
                </Text>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h3
                        }}
                    >
                        {dummyData?.myProfile?.address}
                    </Text>
                    <Image
                        source={icons.down_arrow}
                        style={{
                            marginLeft: SIZES.base,
                            height: 20,
                            width: 20
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Search */}
            {renderSearch()}


            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Delivery To */}
                        {renderDeliveryTo()}

                        {/* Food Categories */}
                        {renderFoodCategories()}

                        {/* Popular */}
                        {renderPopularSection()}

                        {/* Recommended */}
                        {renderRecommendedSection()}

                        {/* MenuType */}
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalFoodCard")}
                        />
                    )
                }}
                ListFooterComponent={
                    <View style={{ height: 200 }} />
                }
            />

        </View>
    )
}

export default Home;