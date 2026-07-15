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
import {useDispatch} from "react-redux";
import {addShoesToCart} from "@/store/slices/cartSlice";

export default function Details() {

    const dispatch = useDispatch();

    const { id } = useLocalSearchParams<{ id: string }>();

    const data = shoes
        .find((el) => el.stock.find((item) => item.id === id))
        ?.stock.find((item) => item.id === id)

    const brand = shoes
        .find((el) => el.stock.find((item) => item.id === id))?.brand

    const images = data!.items.map((item) => item.image);

    const [sizes, setSizes] = useState(data!.items[0].sizes);

    const [selectedImage, setSelectedImage] = useState(data?.items[0].image);
    const [selectedSize, setSelectedSize] = useState<number>();

    const addToCart = () => {

        if (selectedSize === undefined) return;
        if (selectedImage === undefined) return;

        dispatch(addShoesToCart({
            id: data!.id + Date.now(),
            name: brand!.charAt(0).toUpperCase() + brand!.slice(1) + " " + data!.name,
            image: selectedImage,
            size: selectedSize,
            price: data!.price,
            quantity: 1
        }))
    }

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
                            onPress={addToCart}
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