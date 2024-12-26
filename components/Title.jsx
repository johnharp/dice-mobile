import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        color: Colors.color5,
        borderWidth: 2,
        borderColor: Colors.color5,
        padding: 5,
        margin: 20,
        textAlign: "center"
    },
});

export default Title;
