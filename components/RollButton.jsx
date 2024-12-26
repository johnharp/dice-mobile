import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function RollButton({onPress}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.buttonView}>
                <Text style={{ textAlign: "center", fontSize: "32" }}>
                    Roll!
                </Text>
            </View>
        </Pressable>
    );
}

export default RollButton;

const styles = StyleSheet.create({
    buttonView: {
        marginTop: 16,
        padding: 10,
        width: 100,
        backgroundColor: Colors.color5,
        borderRadius: 6,
        shadowColor: "black",
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
    },

    pressed: {
        opacity: 0.5,
    },
});
