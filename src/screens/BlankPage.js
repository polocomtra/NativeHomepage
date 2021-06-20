import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";

export default function BlankPage({ navigation, route }) {
    useEffect(() => {
        console.log("Blank space mount");
    });
    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.container}>
                <Text style={styles.text}>Blank Page</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
    },
});
