import React, {  useContext, useEffect, useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Colors, host, Sizes } from "../constants";
import { HomeService } from "../services/HomeService";
import { store, UPDATE_HOME_TERMS } from "../services/reducers";
import ErrorComponent from "./ErrorComponent";
import SectionLabel from "./SectionLabel";
import * as Linking from "expo-linking";

export default function TermList() {
    const { terms, dispatch } = useContext(store);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const data = await HomeService.getTerms();
        dispatch({
            type: UPDATE_HOME_TERMS,
            data: data.terms,
        });
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (terms.length === 0) {
        return null;
    }

    const renderItem = (item, index) => {
        return (
            <View style={styles.btnWrapper} key={index.toString()}>
                <TouchableOpacity
                    style={styles.btnInner}
                    onPress={() => Linking.openURL(`${host}/BlankPage`)}
                >
                    <Image
                        style={styles.img}
                        source={{
                            uri: `https://media.meete.co/cache/50x0/${item.avatar}`,
                        }}
                    ></Image>
                    <Text category="s2" style={styles.text}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    if (error) {
        return (
            <View style={styles.wrap}>
                <SectionLabel label="Danh mục" />
                <ErrorComponent error={error} />
            </View>
        );
    }

    return (
        <View style={styles.wrap}>
            <SectionLabel label="Danh mục" />

            <FlatList
                style={styles.list}
                windowSize={3}
                data={terms}
                horizontal={true}
                initialNumToRender={3}
                renderItem={({ item, index }) => renderItem(item, index)}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        width: Sizes.vw,
        paddingBottom: 15,
        height: 130,
    },
    list: {
        paddingBottom: 10,
    },
    btnWrapper: {
        paddingLeft: 15,
    },
    btnInner: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
        height: 48,
        alignItems: "center",
        borderRadius: 7,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: Colors.greyBorderColor,
    },
    img: {
        width: 26,
        height: 26,
        marginRight: 13,
    },
});
