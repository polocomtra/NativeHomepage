import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors, host, Sizes } from "../constants";
import MyText from "./MyText";
import * as Linking from "expo-linking";

export const dealCardWidth =
    Math.ceil(Sizes.vw * 0.4) > 180 ? 236 : Math.ceil(Sizes.vw * 0.4) + 20;
const heightImage = dealCardWidth * 0.566;
export const dealCardHeight = heightImage * 2 + 10 + 15;
const cardInnerWidth = dealCardWidth - 10;
export default function DealCard(props) {
    const { deal } = props;

    return (
        <View style={styles.dealCardWrap}>
            <TouchableOpacity
                style={styles.dealCardInner}
                onPress={() => Linking.openURL(`${host}/BlankPage`)}
            >
                <View style={styles.headerWrap}>
                    <Image
                        resizeMode="cover"
                        style={styles.headerImage}
                        source={{
                            uri: `https://media.meete.co/cache/300x0/${deal.avatar}`,
                        }}
                    />
                </View>
                <View style={styles.contentDeal}>
                    <MyText style={styles.headerText}>{deal.logo}</MyText>
                    <MyText style={styles.titleDeal} numberOfLines={2}>
                        {deal.title}
                    </MyText>
                </View>
            </TouchableOpacity>
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dealCardWrap: {
        width: dealCardWidth,
        height: dealCardHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    dealCardInner: {
        width: cardInnerWidth,
        height: dealCardHeight - 15,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: Colors.backgroundColor,
        borderRadius: 7,
    },
    headerWrap: {
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
        width: cardInnerWidth - 1,
        height: heightImage,
        overflow: "hidden",
        alignItems: "center",
    },
    headerImage: {
        width: cardInnerWidth - 2, //  minus the border
        height: heightImage,
    },
    contentDeal: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
    titleDeal: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 5,
    },
});
