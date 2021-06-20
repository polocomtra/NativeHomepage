import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Linking from "expo-linking";
import { host } from "../constants";

export default function CategoryButton(props) {
    const { category } = props;

    let contentWidthStyle =
        typeof props["width"] !== "undefined"
            ? {
                  ...styles.item,
                  width: props["width"],
                  height: props["width"],
              }
            : styles.item;
    if (!category) {
        return (
            <View style={contentWidthStyle}>
                <View style={styles.imgWrap} />
                <View style={{ width: 40, height: 20, marginTop: 8 }} />
            </View>
        );
    }
    return (
        <TouchableOpacity
            style={contentWidthStyle}
            onPress={() => Linking.openURL(`${host}/BlankPage`)}
        >
            <View style={styles.imgWrap}>
                <Image
                    resizeMode="contain"
                    style={styles.itemImg}
                    source={{
                        uri: `https://media.meete.co/cache/100x100/${category.avatar}`,
                    }}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        width: 95,
        height: 95,
        justifyContent: "center",
        alignItems: "center",
    },
    imgWrap: {
        width: 54,
        height: 54,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: "#ffffff",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    itemImg: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },
    itemTitle: {
        textAlign: "center",
        marginTop: 8,
    },
});
