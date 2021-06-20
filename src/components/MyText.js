import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../constants";

export default function MyText(props) {
    let { style, children, onPress, numberOfLines } = props;

    style = typeof style === "undefined" ? {} : style;
    onPress = typeof onPress === "undefined" ? null : onPress;
    numberOfLines = typeof numberOfLines === "undefined" ? 1 : numberOfLines;

    return (
        <Text
            style={[styles.defaultStyle, style]}
            numberOfLines={numberOfLines}
            onPress={onPress}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    defaultStyle: {
        color: Colors.primaryText,
        fontSize: 13,
    },
});
