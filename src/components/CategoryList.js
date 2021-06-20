import React, { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Sizes } from "../constants";
import { HomeService } from "../services/HomeService";
import { store, UPDATE_HOME_CATEGORIES } from "../services/reducers";
import CategoryButton from "./CategoryButton";

const containerWidth = Sizes.vw;
const itemWidth = containerWidth / 4;

export default function CategoryList() {
    const { dispatch, homeCategories } = useContext(store);
    useEffect(() => {
        (async function fetchData() {
            const { navigations } = await HomeService.getNavigation();
            dispatch({
                type: UPDATE_HOME_CATEGORIES,
                data: navigations[0].items,
            });
        })();
    }, []);
    return (
        <View style={styles.wrap}>
            <FlatList
                numColumns={4}
                data={homeCategories}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return <CategoryButton width={itemWidth} category={item} />;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
