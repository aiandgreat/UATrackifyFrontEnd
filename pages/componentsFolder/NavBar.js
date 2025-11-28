import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import {colors} from "../../styles/colors";

const stylesNav = StyleSheet.create({
    navBar: {
        height: 80,
        paddingHorizontal: 16,
        backgroundColor: colors.backgroundColor,
    },
});

export default function NavBar(props) {
    return (
        <View style={stylesNav.navBar}>
            <Text>{props.text}</Text>
            <View><Text>MENU</Text></View>
        </View>
    )
}
