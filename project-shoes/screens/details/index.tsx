import {View, StyleSheet, ScrollView, Platform} from "react-native";
import {shoes} from "@/data/shoes";
import DetailsImage from "@/screens/details/components/DetailsImage";
import DetailsDescription from "@/screens/details/components/DetailsDescription";
import Gallery from "@/screens/details/components/Gallery";
import Sizes from "@/screens/details/components/Sizes";
import {spaces} from "@/constants/spaces";
import CustomButton from "@/ui/buttons/CustomButton";
import {SCREEN_HEIGHT} from "@/constants/sizes";
import {useEffect, useState} from "react";
import {NavigationProp, RouteProp} from "@react-navigation/core";
import {RootStackParamList} from "@/types/navigation";

interface DetailsProps {
    route: RouteProp<RootStackParamList, "Details">;
    navigation: NavigationProp<any>;
}

export default function Details({ route, navigation }: DetailsProps) {

    const data = shoes
        .find((el) => el.stock.find((item) => item.id === route.params.id))
        ?.stock.find((item) => item.id === route.params.id)

    console.log(data)

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
    }, [selectedImage]);

    useEffect(() => {
        navigation.setOptions({
            title: data!.gender === "m" ? "Shoes Homme" : "Shoes Femme"
        })
    }, [route.params.id]);

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <DetailsImage
                        source={selectedImage}
                    />
                    <DetailsDescription
                        name={data!.name}
                        price={data!.price}
                        description={data!.description}
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