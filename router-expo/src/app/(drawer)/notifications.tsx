
import {colors} from "@/src/constants/color";
import {Drawer} from "expo-router/drawer";
import CustomView from "@/src/components/CustomView";
import Title from "@/src/components/Title";
import {CustomLink} from "@/src/components/CustomButtons";

export default function NotificationsPage() {

    return (
        <CustomView>
            <Drawer.Screen
                options={{
                    headerTitleStyle: {
                        color: colors.primary,
                    },
                    title: "Notifications Push"
                }}
            />
            <Title text={"Vos notifications"} />
            <CustomLink
                href={"./articles/new-67"}
                text={"De nouveaux articles sont disponibles"}
            />
        </CustomView>
    )
}
