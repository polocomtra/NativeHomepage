import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import PersonIcon from "react-native-eva-icons/icons/PersonOutline";
import SearchIcon from "react-native-eva-icons/icons/SearchOutline";
import BellIcon from "react-native-eva-icons/icons/BellOutline";
import { Colors, Sizes } from "../constants";

export default function HomeHeader({ name }) {
    return (
        <SafeAreaView>
            <View style={styles.wrap}>
                <View style={styles.leftContent}>
                    <TouchableOpacity
                        style={styles.avatar}
                    >
                        <PersonIcon
                            fill={Colors.greyLighterColor}
                            style={styles.avatarIcon}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.welcomeText}>
                            Hi <Text style={styles.welcomeName}>{name}</Text>
                        </Text>
                    </View>
                </View>
                <View style={styles.rightContent}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <SearchIcon style={styles.icon} fill="#9e9e9e" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <BellIcon style={styles.icon} fill="#9e9e9e" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrap: {
        display: "flex",
        width: Sizes.vw,
        height: 70,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
    },
    leftContent: {
        flex: 6,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 10,
        backgroundColor: Colors.greyBorderColor,
        justifyContent: "center",
        alignItems: "center",
    },
    rightContent: {
        flex: 4,
        flexDirection: "row",
        paddingRight: 10,
        justifyContent: "flex-end",
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#e5e5e5",
        backgroundColor: "#ffffff",
        marginHorizontal: 5,
        shadowOpacity: 1,
        shadowColor: "#e5e5e5",
        shadowOffset: {
            height: 0,
            width: 0,
        },
        shadowRadius: 4,
        elevation: 1,
    },
    icon: {
        width: 20,
        height: 20,
    },
    avatarIcon: {
        width: 30,
        height: 30,
    },
    welcomeText: {
        fontSize: 18,
    },
    welcomeName: {
        fontWeight: "bold",
    },
});