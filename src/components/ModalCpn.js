import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    Pressable,
} from "react-native";
import { Sizes } from "../constants";

export default function ModalCpn({ navigation }) {
    const [modalVisible, setModalVisible] = useState(true);
    const [name, setName] = useState("");

    const handlePress = () => {
        console.log(name);
        setModalVisible(!modalVisible);
        navigation.navigate("Main", { name: name });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                console.log("Modal has been closed");
                setModalVisible(!modalVisible);
            }}
        >
            <View>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}> Bạn tên gì</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setName(text)}
                        placeholder="Nhập tên của bạn"
                    ></TextInput>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handlePress}
                    >
                        <Text style={styles.textStyle}>Tiếp tục</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: Sizes.vw / 2,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#e0e0eb",
        padding: 5,
    },
    //Modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        height: Sizes.vh,
        width: Sizes.vw,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
    },
});
