import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { host, Sizes } from "../constants";
import { HomeService } from "../services/HomeService";
import { store, UPDATE_HOME_BANNER } from "../services/reducers";
import { imageUrl } from "../utils";
import ErrorComponent from "./ErrorComponent";
import * as Linking from "expo-linking";

const contentWidth = Sizes.vw - 20;
const contentHeight = Math.ceil(contentWidth * 0.22);

export default function Banner() {
    const [error, setError] = useState(null);
    const { banner, dispatch } = useContext(store);

    const fetchData = async () => {
        try {
            const { data } = await HomeService.getBanners();
            dispatch({
                type: UPDATE_HOME_BANNER,
                data: data.banner,
            });
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return (
            <View style={styles.wrap}>
                <View style={styles.img}>
                    <ErrorComponent error={error} />
                </View>
            </View>
        );
    }

    if (!banner) {
        return (
            <View style={styles.wrap}>
                <View
                    style={{ width: contentWidth - 10, height: contentHeight }}
                />
            </View>
        );
    }
    return (
        <TouchableOpacity
            style={styles.wrap}
            onPress={() => Linking.openURL(`${host}/BlankPage`)}
        >
            <Image
                resizeMode="contain"
                style={styles.img}
                source={{ uri: imageUrl(banner.src, "800", "0") }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrap: {
        width: Sizes.vw,
        height: contentHeight + 20,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        width: contentWidth,
        height: contentHeight,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#f4f4f4",
    },
});
