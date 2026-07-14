import {StyleSheet, View} from "react-native";
import {spaces} from "@/constants/spaces";
import {colors} from "@/constants/colors";
import TextMediumM from "@/ui/texts/TextMediumM";
import TextBoldXL from "@/ui/texts/TextBoldXL";
import TextBoldL from "@/ui/texts/TextBoldL";
import {Entypo} from "@expo/vector-icons";
import {ICON_SIZE} from "@/constants/sizes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {addFavorite, removeFavorite} from "@/store/slices/favoritesSlice";


interface DetailsDescriptionProps {
    name: string;
    price: number;
    description: string;
    id: string
}

export default function DetailsDescription({name, price, description, id}: DetailsDescriptionProps) {

    const dispatch = useDispatch();
    const favoritesShoesIds = useSelector(
        (state: RootState) => state.favorites.favoritesShoesIds
    );

    const isFavorite = favoritesShoesIds.includes(id);
    const iconName = isFavorite ? "star" : "star-outlined";

    const toggleFavorite = () => {
        if (!isFavorite) {
            dispatch(addFavorite(id));
        } else {
            dispatch(removeFavorite(id));
        }
    }

    return (
        <View style={styles.descritpionContainer}>
            <View>
                <TextMediumM isBlue style={styles.textSpacing}>
                    MEILLEUR CHOIX
                </TextMediumM>
                <View style={styles.nameAndFavoriteContainer}>
                    <TextBoldXL style={styles.textSpacing}>{name}</TextBoldXL>
                    <Entypo
                        name={iconName}
                        size={ICON_SIZE}
                        color={colors.BLUE}
                        onPress={() => toggleFavorite()}
                        suppressHighlighting={true}
                    />
                </View>
            </View>
            <TextBoldL style={styles.textSpacing}>{price} €</TextBoldL>
            <TextMediumM style={styles.descriptionText}>{description}</TextMediumM>
        </View>
    )
}

const styles = StyleSheet.create({
    descritpionContainer: {
        paddingHorizontal: spaces.L,
    },
    textSpacing: {
        marginBottom: spaces.S,
    },
    nameAndFavoriteContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    descriptionText: {
        color: colors.GREY,
    }
})