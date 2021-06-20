import { Dimensions } from "react-native";

export const Sizes = {
    vw: Dimensions.get('screen').width,
    vh: Dimensions.get('screen').height,
    xsmallMargin: 10,
    tinyMargin: 5,
    toolbarHeight: 54,
    fontNormal: 14,
    bookingCardHeight: Math.ceil(Dimensions.get('screen').width * 0.3 * 0.715) + 50,
    dealCardImageWidth: Math.ceil(Dimensions.get('screen').width * 0.3), //  700x460
    dealCardImageHeight: Math.ceil((Dimensions.get('screen').width * 0.3) * 0.65333),
  };

  export const Colors = {
    white: '#fff',
    green: '#39BF28',
    greenBg: '#c1f8b5',
    dark: '#072344',
    offDark: '#8C9EB4',
    yellow: '#FFC107',
    orangeColor: '#f5a623',
    blue: '#12ACD0',
    darkBlue: '#36B1F0',
    backgroundColor: "#edf1f7", // $light
    primaryText: '#1A2138',
    light: '#F9FAFB',
    greyBorderColor: "#E5E5E5",
    greyLighterColor: "#9E9E9E",
    grey: '#8C9EB4',
    greyColor: "#546E7A",
    mainBgColor: '#f4f4f4',
    inputColor: "#eeeeee",
    listBg: '#f7f7f7',
    brown: "#F9C81D",
    underlayRedColor: "#f8a686",
    primary: '#C81526',
    primary100: '#FCDBCF',
    primary200: '#F9B0A0',
    primary300: '#EE796E',
    primary400: '#DE4849',
  
  };

  export const assets={
    home:'../assets/Home.png',
    cart:'../assets/Cart.png',
    settings:'../assets/Profile.png',
    wallet:'../assets/Wallet.png',
    location:'../assets/Location.png'
  }

  export const host='exp://192.168.100.4:19000/--'