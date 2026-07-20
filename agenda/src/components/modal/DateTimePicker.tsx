import { useState } from "react";
import {StyleSheet, View, Text, Pressable, useWindowDimensions} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {getFormattedFullDate, getFormattedTime} from "@/utils";
import {colors} from "@/constants/colors";

interface DateTimePickerProps {
    label: string;
    dateTime: Date;
    setDateTime: (dateTime: Date) => void;
}

const DateTimePicker = ({label, dateTime, setDateTime}: DateTimePickerProps) => {

    const { width } = useWindowDimensions();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [mode, setMode] = useState<"date" | "time">("date");

    const showDate = () => {
        setMode("date");
        setDatePickerVisibility(true);
    };

    const showTime = () => {
        setMode("time");
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setDateTime(date);
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.dateAndTimeContainer, { width: width / 1.5 }]}>
                <Pressable
                    style={[styles.dateContainer, styles.dateTime]}
                    onPress={showDate}
                >
                    <Text>{getFormattedFullDate(dateTime)}</Text>
                </Pressable>
                <Pressable
                    style={[styles.timeContainer, styles.dateTime]}
                    onPress={showTime}
                >
                    <Text>{getFormattedTime(dateTime)}</Text>
                </Pressable>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode={mode}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minuteInterval={15}
                    locale="fr-FR"
                    minimumDate={new Date(2024,0,1)}
                    maximumDate={new Date(2040, 11, 31)}
                    display="spinner"
                    cancelTextIOS="Annuler"
                    confirmTextIOS="Valider"
                    date={dateTime}
                />
            </View>
        </View>
    );
};

export default DateTimePicker;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 12,
    },
    dateAndTimeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dateContainer: {
        width: "50%",
    },
    timeContainer: {
        width: "40%",
    },
    dateTime: {
        height: 48,
        borderRadius: 12,
        backgroundColor: colors.WHITE,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: colors.LIGHT,
        fontWeight: "600",
        fontSize: 18,
    },
});
