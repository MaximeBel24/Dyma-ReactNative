import {Image, ImageSourcePropType, StyleSheet, View} from "react-native";
import {spaces} from "@/constants/spaces";
import {colors} from "@/constants/colors";
import {radius} from "@/constants/radius";
import TextBoldL from "@/ui/texts/TextBoldL";
import Touchable from "@/ui/touchable/Touchable.android";

interface GallryProps {
    images: ImageSourcePropType[];
    selectedImage?: ImageSourcePropType;
    setSelectedImage: (image: ImageSourcePropType) => void;
}

export default function Gallery({ images, selectedImage, setSelectedImage }: GallryProps) {
    return (
        <View style={styles.galleryContainer}>
            <TextBoldL>Galerie</TextBoldL>
            <View style={styles.imagesContainer}>
                {images.map((image) => (
                    <View style={styles.imageContainer} key={image.toString()}>
                        <Touchable
                            onPress={() => setSelectedImage(image)}
                            color={colors.BLUE}

                        >
                            <View
                                style={[
                                    styles.imageContainer,
                                    image === selectedImage ? styles.selectedImage : undefined
                                ]}
                            >
                                <Image
                                    source={image}
                                    style={styles.image}
                                />
                            </View>
                        </Touchable>
                    </View>

                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    galleryContainer: {
        paddingHorizontal: spaces.L,
        marginTop: spaces.L,
    },
    imagesContainer: {
        flexDirection: 'row',
        marginBottom: spaces.M,
    },
    imageContainer: {
        width: 90,
        height: 90,
        backgroundColor: colors.LIGHT,
        borderRadius: radius.REGULAR,
        marginRight: spaces.M,
    },
    selectedImage: {
        borderWidth: 1,
        borderColor: colors.BLUE
    },
    image: {
        width: 90,
        height: 90,
        transform: [
            { rotate: "-20deg" },
            { translateX: -spaces.S },
            { translateY: -spaces.S },
        ]
    }
})