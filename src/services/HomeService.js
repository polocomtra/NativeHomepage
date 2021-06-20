import axiosClient from "./axiosClient"
import axios from 'axios'


export const HomeService={
    getArticles:()=>{
        return axiosClient.get('/search/articles?display=homepage&provinceId=1')
            .then(result=>result)
            .catch(error=>console.log(error))
    },
    getNavigation:()=>{
        return axiosClient.get('/marketing/navigations?buildNumber=645&provinceId=1')
            .then(result=>result)
            .catch(error=>console.log(error))
    },
    getTerms:()=>{
        return axiosClient.get('/voucher/terms?provinceId=1')
            .then(result=>result)
            .catch(error=>console.log(error))
    },
    getBanners:()=>{
        return axios.get(`https://firestore.meete.co/static-data/home?provinceId=1`,{
            headers:{
                'x-meete-client-type':'iOS',
                'x-meete-client-version':'614',
                'content-type':'application/json'
            }
        }).then(result=>result)
            .catch(error=>console.log(error))
    },
    getCollections:()=>{
        return axiosClient.get('/marketing/collections?provinceId=1&tag=home')
            .then(result=>{
                const {count,collections}=result;
                let collectionNormals=[];
                let collectionHots=[];

                for (const item of collections){
                    if(item.tags.indexOf("hotHome")>-1){
                        collectionHots.push(item);
                    }else if(item.tags.indexOf("home")>-1 && item.tags.indexOf("hotHome")===-1){
                        collectionNormals.push(item)
                    }
                }
                const data={
                    collections:collectionNormals,
                    hotCollections:collectionHots
                }
                return data
            })
            .catch(error=>console.log(error))
    },
}