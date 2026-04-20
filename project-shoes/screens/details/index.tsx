import {View, StyleSheet, ScrollView} from "react-native";
import {shoes} from "@/data/shoes";
import DetailsImage from "@/screens/details/components/DetailsImage";
import DetailsDescription from "@/screens/details/components/DetailsDescription";
import Gallery from "@/screens/details/components/Gallery";
import Sizes from "@/screens/details/components/Sizes";
import {spaces} from "@/constants/spaces";
import CustomButton from "@/ui/buttons/CustomButton";
import {SCREEN_HEIGHT} from "@/constants/sizes";
import {useState} from "react";

export default function Details() {

    const data = shoes[0].stock[0];
    const images = data.items.map((item) => item.image);

    const sizes = data.items[0].sizes;

    const [selectedImage, setSelectedImage] = useState(data.items[0].image);
    const [selectedSize, setSelectedSize] = useState<number>();

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <DetailsImage
                        source={selectedImage}
                    />
                    <DetailsDescription
                        name={data.name}
                        price={data.price}
                        description={data.description}
                    />
                    <Gallery
                        images={images}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                    />
                    <Sizes
                        sizes={sizes}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />
                    <View style={styles.btnContainer}>
                        <CustomButton
                            text={"Ajouter au panier"}
                            onPress={() => console.log("Ajouter au panier")}
                        />
                    </View>
                    <View style={styles.fixView} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles= StyleSheet.create({
    mainContainer: {
        height: SCREEN_HEIGHT,
    },
    container: {
        position: "relative",
        bottom: 120
    },
    btnContainer: {
        width: "80%",
        alignSelf: "center",
        maxWidth: 400,
        marginVertical: spaces.XL
    },
    fixView: {
        marginBottom: -120,
    }
})