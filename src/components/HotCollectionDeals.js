import React, { useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    View,
} from "react-native";
import { Sizes } from "../constants";
import DealCard, { dealCardHeight } from "./DealCard";
import ErrorComponent from "./ErrorComponent";
import SectionLabel from "./SectionLabel";

const wrapHeight = dealCardHeight + 10 + 40;

export default function HotCollectionDeals({ hotCollections }) {
    const [collection, setCollection] = useState({
        id: hotCollections.id,
        name: hotCollections.name,
        deals: hotCollections.items,
    });

    const [error, setError] = useState(null);
    const renderItem = (item, index) => {
        return (
            <View
                key={index}
                style={
                    index === 0
                        ? [styles.dealWrap, styles.firstItem]
                        : styles.dealWrap
                }
            >
                <DealCard deal={item} />
            </View>
        );
    };

    if (error) {
        return (
            <View style={styles.wrap}>
                <ErrorComponent error={error} />
            </View>
        );
    }

    if (!hotCollections) {
        return (
            <View
                style={{
                    ...styles.wrap,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ActivityIndicator />
            </View>
        );
    }
    return (
        <View style={styles.wrap}>
            <View style={styles.wrapperTitle}>
                <SectionLabel label={collection.name} />
            </View>
            <FlatList
                windowSize={3}
                data={collection.deals}
                horizontal={true}
                initialNumToRender={3}
                renderItem={({ item, index }) => renderItem(item, index)}
                keyExtractor={(item, index) => {
                    return index.toString();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        height: wrapHeight,
        width: Sizes.vw,
    },
    firstItem: {
        marginLeft: 10,
    },
    dealWrap: {
        marginRight: 5,
    },
    seeMoreWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
    },
    wrapperTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
