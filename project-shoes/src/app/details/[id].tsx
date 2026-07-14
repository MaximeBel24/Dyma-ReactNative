import {View, StyleSheet, ScrollView, Platform} from "react-native";
import {shoes} from "@/data/shoes";
import DetailsImage from "@/components/details/DetailsImage";
import DetailsDescription from "@/components/details/DetailsDescription";
import Gallery from "@/components/details/Gallery";
import Sizes from "@/components/details/Sizes";
import {spaces} from "@/constants/spaces";
import CustomButton from "@/ui/buttons/CustomButton";
import {SCREEN_HEIGHT} from "@/constants/sizes";
import {useEffect, useState} from "react";
import {Stack, useLocalSearchParams} from "expo-router";

export default function Details() {

    const { id } = useLocalSearchParams<{ id: string }>();

    const data = shoes
        .find((el) => el.stock.find((item) => item.id === id))
        ?.stock.find((item) => item.id === id)

    const images = data!.items.map((item) => item.image);

    const [sizes, setSizes] = useState(data!.items[0].sizes);

    const [selectedImage, setSelectedImage] = useState(data?.items[0].image);
    const [selectedSize, setSelectedSize] = useState<number>();

    useEffect(() => {
        const found = data?.items.find((el) => el.image === selectedImage);
        if (found) {
            setSizes(found.sizes);
        }
        setSelectedSize(undefined);
    }, [data?.items, selectedImage]);

    return (

        <View>
            <Stack.Screen options={{ title: data!.gender === "m" ? "Shoes Homme" : "Shoes Femme" }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <DetailsImage
                        source={selectedImage}
                    />
                    <DetailsDescription
                        name={data!.name}
                        price={data!.price}
                        description={data!.description}
                        id={id}
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
        bottom: Platform.select({ android: 80, ios: 100 }),
    },
    btnContainer: {
        width: "80%",
        alignSelf: "center",
        maxWidth: 400,
        marginVertical: spaces.XL
    },
    fixView: {
        marginBottom: Platform.select({ android: -80, ios: -100 }),
    }
})