import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Colors, Sizes } from "../constants";
import { HomeService } from "../services/HomeService";
import { store, UPDATE_HOME_ARTICLES } from "../services/reducers";

const sliderWidth = Sizes.vw;
const sliderHeight = Math.ceil(sliderWidth * 0.4);
const itemWidth = Math.ceil(sliderWidth * 0.9);

export default function ArticleSlider() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [error, setError] = useState(null);
    const { dispatch, articles } = useContext(store);

    const fetchData = async () => {
        const data = await HomeService.getArticles();
        dispatch({
            type: UPDATE_HOME_ARTICLES,
            data: data.articles,
        });
    };
    useEffect(() => {
        fetchData();
    }, []);

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.slide}
            >
                <Image
                    resizeMode="contain"
                    style={styles.slideImg}
                    source={{
                        uri: `https://media.meete.co/cache/500x166/${item["avatar"]}`,
                    }}
                />
            </TouchableOpacity>
        );
    };

    const renderPagination = (articles) => {
        return (
            <View style={styles.pagination}>
                <Pagination
                    dotsLength={articles.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 8,
                        height: 2,
                        borderRadius: 1,
                        backgroundColor: Colors.primary,
                    }}
                    inactiveDotStyle={{
                        backgroundColor: Colors.primary100,
                    }}
                    inactiveDotOpacity={0.6}
                    inactiveDotScale={1}
                />
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

    if (!articles || articles.length === 0) {
        return (
            <View style={styles.wrap}>
                <View style={styles.slideImg} />
            </View>
        );
    }

    return (
        <View style={styles.wrap}>
            <Carousel
                layout={"default"}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                ref={(c) => {
                    this._carousel = c;
                }}
                data={articles}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={0.95}
                onSnapToItem={(index) => setActiveSlide(index)}
            />

            {renderPagination(articles)}
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        justifyContent: "center",
        alignItems: "center",
        height: Math.ceil(itemWidth * 0.33),
    },
    slideImg: {
        width: itemWidth,
        height: Math.ceil(itemWidth * 0.33),
        borderRadius: 8,
    },
    pagination: {
        position: "absolute",
        right: 0,
        bottom: -15,
        left: (sliderWidth - 50) / 2,
        width: 50,
    },
    wrap: {
        width: Sizes.vw,
        height: sliderHeight,
        paddingTop: 10,
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
