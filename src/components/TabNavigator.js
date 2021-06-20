import React, { createContext } from "react";
import {  StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Colors, Sizes } from "../constants";
import HomeScreen from "../screens/HomeScreen";
import BlankPage from "../screens/BlankPage";
import {
    CART_SCREEN,
    CASH_WALLET_SCREEN,
    HOME_SCREEN,
    ScreenTitle,
    SEARCH_SCREEN,
    SETTINGS_SCREEN,
} from "../routes";
import { Icon } from "react-native-elements/dist/icons/Icon";

const Tab = createBottomTabNavigator();
export const ParamsContext = createContext();

export default function TabNavigator({ navigation, route }) {
    console.log(route.params);
    const customTabBarStyle = {
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.gray,
        showLabel: false,
    };
    return (
        <ParamsContext.Provider value={route.params.name}>
            <Tab.Navigator
                initialRouteName={HomeScreen}
                tabBarOptions={customTabBarStyle}
                shifting="false"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <TabBarButton
                                name={route.name}
                                focused={focused}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen
                    title={ScreenTitle[HOME_SCREEN]}
                    name={HOME_SCREEN}
                    component={HomeScreen}
                />
                <Tab.Screen
                    title={ScreenTitle[CASH_WALLET_SCREEN]}
                    name={CASH_WALLET_SCREEN}
                    component={BlankPage}
                />
                <Tab.Screen
                    title={ScreenTitle[SEARCH_SCREEN]}
                    name={SEARCH_SCREEN}
                    component={BlankPage}
                />
                <Tab.Screen
                    title={ScreenTitle[CART_SCREEN]}
                    name={CART_SCREEN}
                    component={BlankPage}
                />
                <Tab.Screen
                    title={ScreenTitle[SETTINGS_SCREEN]}
                    name={SETTINGS_SCREEN}
                    component={BlankPage}
                />
            </Tab.Navigator>
        </ParamsContext.Provider>
    );
}

const TabBarButton = ({ name, size, color, focused }) => {
    if (focused) {
        return (
            <View style={styles.tabButton}>
                <Text style={styles.tabButtonText} numberOfLines={1}>
                    {ScreenTitle[name]}
                </Text>
                <View style={styles.tabButtonDot} />
            </View>
        );
    }

    if (name === CASH_WALLET_SCREEN) {
        return (
            <Icon
                name="account-balance-wallet"
                color="gray"
                style={styles.icon}
            ></Icon>
        );
    }
    if (name === CART_SCREEN) {
        return (
            <Icon name="shopping-cart" color="gray" style={styles.icon}></Icon>
        );
    }
    if (name === SEARCH_SCREEN) {
        return (
            <View style={styles.searchBtn}>
                <Icon
                    name="location-on"
                    color="#fff"
                    style={styles.locationIcon}
                ></Icon>
            </View>
        );
    }
    if (name === SETTINGS_SCREEN) {
        return <Icon name="settings" color="gray" style={styles.icon}></Icon>;
    }
    return <Icon name="home" color="gray" style={styles.icon}></Icon>;
};

const styles = StyleSheet.create({
    tabButton: {
        justifyContent: "center",
        alignItems: "center",
        width: Math.round(Sizes.vw / 5),
    },

    tabButtonDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.primary,
        marginTop: 5,
    },
    tabButtonText: {
        fontSize: 14,
        color: Colors.primary,
    },
    searchBtn: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    locationIcon: {
        width: 22,
        height: 22,
    },
    icon: {
        width: 26,
        height: 26,
        tintColor: Colors.greyColor,
    },
});
