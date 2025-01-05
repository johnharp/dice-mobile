import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function PrimaryButton({ onPress, children }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.buttonView}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: Colors.color1,
        borderRadius: 6,
        shadowColor: "black",
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        alignItems: "center",
    },

    text: {
        textAlign: "center",
        fontSize: 32,
        color: Colors.color3,
    },

    pressed: {
        opacity: 0.5,
    },
});

export default PrimaryButton;
