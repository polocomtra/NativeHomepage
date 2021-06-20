import React, { useContext, useEffect, useState } from "react";
import {
    RefreshControl,
    SectionList,
    StatusBar,
    StyleSheet,
    View,
} from "react-native";
import TermList from "../components/TermList";
import ArticleSlider from '../components/ArticleSlider';
import { HomeProvider } from "../services/reducers";
import Banner from "../components/Banner";
import CollectionList from "../components/CollectionList";
import HotCollectionList from "../components/HotCollectionList";
import HomeHeader from "../components/HomeHeader";
import ErrorComponent from "../components/ErrorComponent";
import { Colors, Sizes } from "../constants";
import { ParamsContext } from "../components/TabNavigator";
import CategoryList from "../components/CategoryList";
import MainHolder from "../components/MainHolder";

const HomeScreen = () => {
    const nameContext = useContext(ParamsContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState(nameContext);
    const onRefresh = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        const timeoutVal = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timeoutVal);
        };
    }, []);

    if (error) {
        return <ErrorComponent error={error} />;
    }
    if (loading) {
        return <MainHolder />;
    }
    return (
        <HomeProvider>
            <View style={styles.wrap}>
                <StatusBar
                    backgroundColor={Colors.red}
                    barStyle="dark-content"
                />
                <HomeHeader name={name} />
                <View style={styles.list}>
                    <SectionList
                        refreshControl={
                            <RefreshControl
                                refreshing={loading}
                                onRefresh={onRefresh}
                            />
                        }
                        windowSize={5}
                        keyExtractor={(item) => item.key}
                        stickySectionHeadersEnabled={true}
                        sections={[
                            {data:[<ArticleSlider/>],key:1},
                            { data: [<CategoryList />], key: 2 },
                            { data: [<TermList />], key: 3 },
                            { data: [<Banner />], key: 4 },
                            { data: [<HotCollectionList />], key: 5 },
                            { data: [<CollectionList />], key: 6 },
                        ]}
                        renderItem={({ item }) => item}
                        renderSectionHeader={({ section: { title } }) => {
                            return null;
                        }}
                    />
                </View>
            </View>
        </HomeProvider>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    list: {
        height: Sizes.vh,
        flex: 1,
        marginBottom: 10,
    },
});
