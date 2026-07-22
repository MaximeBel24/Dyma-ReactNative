import {Pressable, StyleSheet, Modal, View, Text, Keyboard} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import Input from "@/components/modal/Input";
import DateTimePicker from "@/components/modal/DateTimePicker";
import {useEffect, useState} from "react";
import IsOnline from "@/components/modal/IsOnline";
import CustomBtn from "@/components/modal/CustomBtn";
import {AgendaEvent} from "@/store/slices/agendaSlice";


interface FormProps {
    isFormVisible: boolean;
    closeForm: () => void;
    selectedEvent?: AgendaEvent;
}

const Form = ({ isFormVisible, closeForm, selectedEvent }: FormProps) => {

    const closeKeyboardHandler = () => Keyboard.dismiss();

    interface FormData {
        title: string;
        location: string;
        phoneNumber: string;
        description: string;
        startDate: Date;
        endDate: Date;
        isOnline: boolean;
    }

    const initialState: FormData = {
        title: "",
        location: "",
        phoneNumber: "",
        description: "",
        startDate: new Date(),
        endDate: new Date(),
        isOnline: false,
    };

    const [formData, setFormData] = useState(initialState);

    const onSubmit = () => {
        console.log(formData);
        closeForm();
        setFormData(initialState);
    };

    const closeFormHandler = () => {
        closeForm();
        setFormData(initialState);
    }

    const onFormChange = <K extends keyof FormData>(key: K, value: FormData[K]) => {
        setFormData((previous) => {
            return {
                ...previous,
                [key]: value,
            }
        })
    }

    useEffect(() => {
        if (selectedEvent) {
            setFormData({
                title: selectedEvent.title,
                location: selectedEvent.location,
                phoneNumber: selectedEvent.phoneNumber,
                description: selectedEvent.description,
                startDate: new Date(selectedEvent.startDate),   // string → Date
                endDate: new Date(selectedEvent.endDate),        // string → Date
                isOnline: selectedEvent.isOnline,
            });
        }
    }, [selectedEvent]);

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
                    <Text style={styles.formTitle}>
                        {selectedEvent ? "Modifier l'évènement " : "Nouvel événement"}
                    </Text>
                    <Feather
                        name="trash-2"
                        size={28}
                        color={colors.LIGHT}
                        onPress={closeFormHandler}
                        suppressHighlighting={true}
                    />
                </View>
                <Input
                    label={"Titre"}
                    autoCorrect={false}
                    maxLength={40}
                    value={formData.title}
                    onChangeText={(value) => onFormChange("title", value)}
                />
                <Input
                    label={formData.isOnline ? "Url" : "Lieu"}
                    inputMode={formData.isOnline ? "url" : "text"}
                    autoCorrect={false}
                    maxLength={40}
                    value={formData.location}
                    onChangeText={(value) => onFormChange("location", value)}
                />
                <Input
                    label={"Téléphone"}
                    inputMode={"tel"}
                    maxLength={10}
                    value={formData.phoneNumber}
                    onChangeText={(value) => onFormChange("phoneNumber", value)}
                />
                <Input
                    label={"Description"}
                    multiline
                    maxLength={120}
                    value={formData.description}
                    onChangeText={(value) => onFormChange("description", value)}
                />
                <DateTimePicker
                    label={"Début"}
                    dateTime={formData.startDate}
                    setDateTime={(value) => onFormChange("startDate", value)}
                />
                <DateTimePicker
                    label={"Fin"}
                    dateTime={formData.endDate}
                    setDateTime={(value) => onFormChange("endDate", value)}
                />
                <IsOnline
                    isEnabled={formData.isOnline}
                    setIsEnabled={(value) => onFormChange("isOnline", value)}
                />
                <View style={styles.btnContainer}>
                    <CustomBtn
                        text={"Annuler"}
                        onPress={closeFormHandler}
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
