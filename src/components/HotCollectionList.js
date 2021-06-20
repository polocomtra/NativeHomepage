import React, { Fragment, useContext } from "react";
import { StyleSheet } from "react-native";
import { store } from "../services/reducers";
import HotCollectionDeals from "./HotCollectionDeals";

export default function HotCollectionList() {
    const { hotCollections } = useContext(store);

    if (hotCollections.length > 0) {
        hotCollections.sort((a, b) =>
            a.weight > b.weight ? 1 : b.weight > a.weight ? -1 : 0
        );

        return (
            <Fragment>
                {hotCollections.map((current, index) => {
                    return (
                        <HotCollectionDeals
                            key={index}
                            hotCollections={current}
                        />
                    );
                })}
            </Fragment>
        );
    }
    return null;
}

const styles = StyleSheet.create({});
