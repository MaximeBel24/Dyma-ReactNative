import {Pressable, StyleSheet, Modal, View, Text, Keyboard} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import Input from "@/components/modal/Input";
import DateTimePicker from "@/components/modal/DateTimePicker";
import {useState} from "react";
import IsOnline from "@/components/modal/IsOnline";
import CustomBtn from "@/components/modal/CustomBtn";

interface FormProps {
    isFormVisible: boolean;
    closeForm: () => void;
}

const Form = ({ isFormVisible, closeForm }: FormProps) => {

    const closeKeyboardHandler = () => Keyboard.dismiss();

    const [title, setTitle] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isOnline, setIsOnline] = useState<boolean>(false);

    const onSubmit = () => {
        console.log({
            title,
            location,
            phoneNumber,
            description,
            startDate,
            endDate,
            isOnline,
        });
        closeForm();
    };

    return (
        <Modal
            visible={isFormVisible}
            presentationStyle="formSheet"
            animationType="slide"
        >
            <Pressable
                style={styles.formContainer}
                onPress={closeKeyboardHandler}
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.formTitle}>Nouvel événement</Text>
                    <Feather
                        name="trash-2"
                        size={28}
                        color={colors.LIGHT}
                        onPress={closeForm}
                        suppressHighlighting={true}
                    />
                </View>
                <Input
                    label={"Titre"}
                    autoCorrect={false}
                    maxLength={40}
                    value={title}
                    onChangeText={setTitle}
                />
                <Input
                    label={isOnline ? "Url" : "Lieu"}
                    inputMode={isOnline ? "url" : "text"}
                    autoCorrect={false}
                    maxLength={40}
                    value={location}
                    onChangeText={setLocation}
                />
                <Input
                    label={"Téléphone"}
                    inputMode={"tel"}
                    maxLength={10}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <Input
                    label={"Description"}
                    multiline
                    maxLength={120}
                    value={description}
                    onChangeText={setDescription}
                />
                <DateTimePicker
                    label={"Début"}
                    dateTime={startDate}
                    setDateTime={setStartDate}
                />
                <DateTimePicker
                    label={"Fin"}
                    dateTime={endDate}
                    setDateTime={setEndDate}
                />
                <IsOnline
                    isEnabled={isOnline}
                    setIsEnabled={setIsOnline}
                />
                <View style={styles.btnContainer}>
                    <CustomBtn
                        text={"Annuler"}
                        onPress={closeForm}
                        color={colors.PINK}
                    />
                    <CustomBtn
                        text={"Valider"}
                        onPress={onSubmit}
                        color={colors.VIOLET}
                    />
                </View>
            </Pressable>
        </Modal>
    );
};

export default Form;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 24,
        backgroundColor: colors.DARK,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.VIOLET,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
});
