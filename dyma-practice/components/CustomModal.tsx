import {KeyboardAvoidingView, Modal, TextInput, View, Image, StyleSheet} from "react-native";
import CustomBtn from "@/components/ui/CustomBtn";

interface CustomModalProps {
    isModalVisible: boolean;
    inputValue: string;
    setInputValue: (value: string) => void;
    onCreateItem: () => void;
    onCloseModal: () => void;
}

export default function CustomModal({
    isModalVisible,
    inputValue,
    setInputValue,
    onCreateItem,
    onCloseModal
}: CustomModalProps) {

    console.log({
        isModalVisible,
        inputValue,
        setInputValue,
        onCreateItem,
        onCloseModal
    })
    return (
        <Modal visible={isModalVisible} animationType={"slide"}>
            <KeyboardAvoidingView style={styles.keyboardView} behavior={"height"}>
                <View style={styles.modalView}>
                    <Image
                        source={{uri: 'data:image/png;base64,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'}}
                        style={styles.image}
                    />
                    <TextInput value={inputValue} onChangeText={setInputValue} style={styles.input}/>
                    <View style={styles.modalBtnContainer}>
                        <CustomBtn
                            text={"Créer"}
                            color={"green"}
                            onPress={onCreateItem}
                        />
                        <CustomBtn
                            text={"Fermer"}
                            color={"red"}
                            onPress={onCloseModal}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    keyboardView: {
        flex: 1,
    },
    modalView: {
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    image: {
        width: 260,
        height: 260,
        borderRadius: 12,
    },
    input: {
        width: "100%",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 8,
        height: 42,
        fontSize: 20,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    modalBtnContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
})