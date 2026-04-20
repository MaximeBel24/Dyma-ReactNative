import {FlatList, StyleSheet, View, Text} from "react-native";

interface ItemsListProps {
    data: string[]
}

export default function ItemsList({data}: ItemsListProps) {
    return (
        <View style={styles.resultContainer}>
            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Text style={styles.item}> {item} </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        width: "100%",
        padding: 8,
        flex: 1,
    },
    itemContainer: {
        width: "100%",
        height: 38,
        marginVertical: 12,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        color: "white",
        fontSize: 20,
    },
})