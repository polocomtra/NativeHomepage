import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Sizes } from '../constants'
import { HomeService } from '../services/HomeService'
import { store, UPDATE_HOME_COLLECTIONS, UPDATE_HOME_HOT_COLLECTIONS } from '../services/reducers'
import CollectionCard from './CollectionCard'
import ErrorComponent from './ErrorComponent'
import SectionLabel from './SectionLabel'

const itemWidth = Math.ceil(Sizes.vw / 2.2 - 10);
const heightItem = Math.ceil(itemWidth * 0.714);
export default function CollectionList() {
    const {collections,dispatch}=useContext(store)
    const [error,setError]=useState(null)

    const fetchData=async ()=>{
        try {
            const {collections,hotCollections}=await HomeService.getCollections();
            
            dispatch({
                type:UPDATE_HOME_COLLECTIONS,
                data:collections
            })
            dispatch({
                type:UPDATE_HOME_HOT_COLLECTIONS,
                data:hotCollections
            })
        } catch (error) {
            console.log(error)
            setError(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    if(!collections || collections.length===0){
        return null;
    }

    const renderItem=(item,index)=>{
        return (
            <View key={index}>
                <CollectionCard collection={item} />
            </View>
        )
        
    }

    if(error){
        return (
            <View style={styles.wrap}>
                <SectionLabel label="List Collections" />
                <ErrorComponent error={error} />
            </View>
        )
    }
    
    return (
        <View style={styles.wrap}>
            <SectionLabel label="List Collections"/>
            <View style={styles.listWrap}>
                <FlatList
                    windowSize={3}
                    data={collections}
                    horizontal={true}
                    initialNumToRender={3}
                    renderItem={({item, index}) => renderItem(item,index)}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    />
            </View>
            
    </View>
    )
}


const styles = StyleSheet.create({
    wrap: {
        width: Sizes.vw,
        height: heightItem+80
      },
})
