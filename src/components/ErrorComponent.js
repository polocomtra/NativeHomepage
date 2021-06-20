import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants";

export default function ErrorComponent({ error }) {
    return (
        <View style={styles.wrap}>
            <Text style={styles.text}>
                {error.message + ", #" + (error.code || error.status)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        color: Colors.red,
    },
});
