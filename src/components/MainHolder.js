import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Sizes } from "../constants";
import CategoryButton from "./CategoryButton";
import CollectionCard from "./CollectionCard";
import HomeHeader from "./HomeHeader";
import SectionLabel from "./SectionLabel";

const cateItemWidth = Sizes.vw / 4;
const containerHeight = Math.ceil(cateItemWidth * 2);
export default function MainHolder() {
    const categories = [null, null, null, null];
    const collections = [null, null, null, null, null, null, null, null];

    const renderItem = (item, index) => {
        return (
            <View key={index}>
                <CollectionCard collection={item} />
            </View>
        );
    };
    return (
        <View style={styles.wrapper}>
            {/* Header */}
            <HomeHeader />

            {/* Article Slider */}
            <View style={styles.articleWrap}>
                <View style={styles.slideImg} />
            </View>

            {/* Category */}
            <View style={styles.cateRow}>
                {categories.map((cate, index) => {
                    return (
                        <CategoryButton
                            key={index}
                            width={cateItemWidth}
                            category={cate}
                        />
                    );
                })}
            </View>

            {/* Banner */}
            <View style={styles.bannerWrap}>
                <View style={styles.bannerWrap}>
                    <View style={styles.bannerImg} />
                </View>
            </View>

            {/* Collections */}
            <View style={styles.collectionWrap}>
                <SectionLabel label={null} />
                <FlatList
                    data={collections}
                    horizontal={true}
                    initialNumToRender={3}
                    renderItem={({ item, index }) => renderItem(item, index)}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                />
            </View>
        </View>
    );
}

const sliderWidth = Sizes.vw;
const sliderHeight = Math.ceil(sliderWidth * 0.4);
const sliderItemWidth = Math.ceil(sliderWidth * 0.9);

const bannerHeight = Math.ceil(sliderWidth * 0.22);

const itemWidth = Math.ceil(Sizes.vw / 2.2 - 10);
const heightItem = Math.ceil(itemWidth * 0.714);
const collectionHeight = Math.ceil(heightItem * 2 + 40 + 40);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    //  article slider
    articleWrap: {
        width: Sizes.vw,
        height: sliderHeight,
        paddingTop: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    slideImg: {
        width: sliderItemWidth,
        height: Math.ceil(sliderItemWidth * 0.33),
        // backgroundColor: 'white',
        borderRadius: 8,
    },
    //  categories
    cateWrap: {
        width: Sizes.vw,
        height: containerHeight,
    },
    cateRow: {
        flex: 1,
        flexDirection: "row",
    },
    //  banner
    bannerWrap: {
        width: sliderWidth,
        height: bannerHeight,
        alignItems: "center",
    },
    bannerImg: {
        width: sliderWidth - 10,
        height: bannerHeight,
    },
    //  collections
    collectionWrap: {
        width: Sizes.vw,
        height: collectionHeight + 20,
    },
});
