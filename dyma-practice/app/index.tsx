// if (__DEV__) {
//     require("./ReactotronConfig");
// }
import {
    StyleSheet,
} from "react-native";
import {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import CustomModal from "@/components/CustomModal";
import ItemsList from "@/components/ItemsList";
import ModalOpener from "@/components/ModalOpener";

export default function Index() {

    const [inputValue, setInputValue] = useState<string>('');
    const [inputResult, setInputResult] = useState<string[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onOpenModal = () => {
        setIsModalVisible(true);
    }

    console.log(isModalVisible);

    const onCreateItem = () => {
        setInputResult(prev => [...prev, inputValue]);
        setInputValue("")
        setIsModalVisible(false);
    }

    const onCloseModal = () => {
        setIsModalVisible(false);
    }

    console.log(inputValue)

  return (
      <SafeAreaView style={[styles.container]}>
          <ModalOpener
              onOpenModal={onOpenModal}
          />
          <ItemsList
              data={inputResult}
          />
          <CustomModal
              isModalVisible={isModalVisible}
              inputValue={inputValue}
              setInputValue={setInputValue}
              onCreateItem={onCreateItem}
              onCloseModal={onCloseModal}
          />
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
})