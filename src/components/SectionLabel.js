import React from "react";
import { StyleSheet, View } from "react-native";
import { Colors, Sizes } from "../constants";
import MyText from "./MyText";

export default function SectionLabel(props) {
    const { label, style } = props;

    if (!label) {
        return (
            <View style={styles.textWrapper}>
                <View style={styles.labelHolder}></View>
            </View>
        );
    }
    return (
        <View style={styles.textWrapper}>
            <View style={styles.lineWrap}>
                <View style={[styles.line, style]} />
            </View>
            <MyText style={styles.label}>{label}</MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    textWrapper: {
        flexDirection: "row",
        height: 60,
        alignItems: "center",
    },
    labelHolder: {
        marginLeft: 15,
        width: 200,
        height: 20,
        marginVertical: 10,
    },
    lineWrap: {
        height: 40,
        width: 5,
        marginLeft: Sizes.xsmallMargin,
        justifyContent: "center",
        alignItems: "center",
    },
    line: {
        height: "70%",
        width: 5,
        backgroundColor: "#DE4849",
        borderRadius: 2,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 10,
        color: Colors.primaryText,
    },
});
