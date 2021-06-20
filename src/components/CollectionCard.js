import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors, host, Sizes } from "../constants";
import MyText from "./MyText";
import * as Linking from "expo-linking";

export default function CollectionCard({ collection }) {
    if (!collection) {
        return (
            <View style={styles.wrap}>
                <View style={styles.img} />
            </View>
        );
    }
    return (
        <TouchableOpacity
            style={styles.wrap}
            onPress={() => Linking.openURL(`${host}/BlankPage`)}
        >
            <Image
                style={styles.img}
                source={{
                    uri: `https://media.meete.co/cache/300x213/${collection.avatar}`,
                }}
            />
            <View style={styles.textWrap}>
                <MyText style={styles.text}>{collection.name}</MyText>
            </View>
        </TouchableOpacity>
    );
}

export const collectionCardWidth =
    Math.ceil(Sizes.vw * 0.4) > 180 ? 236 : Math.ceil(Sizes.vw * 0.4) + 20;
const cardHeight = Math.ceil((collectionCardWidth - 10) * 0.714);

const styles = StyleSheet.create({
    wrap: {
        width: collectionCardWidth - 10,
        height: cardHeight,
        marginLeft: 15,
        marginBottom: 20,
    },
    img: {
        width: collectionCardWidth - 10,
        height: cardHeight,
        borderRadius: 5,
        backgroundColor: Colors.greyBorderColor,
    },
    text: {
        fontWeight: "500",
        paddingTop: 5,
    },
    textWrap: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
