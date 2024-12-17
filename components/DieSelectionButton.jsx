import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Colors from "../colors";

function DieSelectionButton({ numSides, img, count, onPress, onClear }) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => onPress(numSides)}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.pressArea}>
                    {!img && <Text>{numSides}</Text>}
                    {img && (
                        <Image style={{ width: 85, height: 85 }} source={img} />
                    )}
                </View>
            </Pressable>
            {count > 0 && (
                <Text style={styles.text}>{count + "D" + numSides}</Text>
            )}

            {count > 0 && (
                <Pressable
                    onPress={() => onClear(numSides)}
                    style={({ pressed }) => pressed && styles.pressed}
                >
                    <View style={styles.pressArea}>
                        <Text>Reset</Text>
                    </View>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    pressArea: {
        //borderWidth: 1,
        borderRadius: 6,
        padding: 8,
        backgroundColor: Colors.color4,
        width: 100,
        height: 100,
        shadowColor: "black",
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        marginRight: 5,
        marginBottom: 5,
    },

    item: {
        //borderWidth: 1,
        //borderRadius: 6,
        flexDirection: "row",
        padding: 8,
        backgroundColor: Colors.color1,
        shadowColor: "black",
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        height: "30%",
        marginRight: 5,
        marginBottom: 5,
        alignItems: "center",
        alignContent: "center",
    },

    pressed: {
        opacity: 0.5,
    },

    text: {
        height: 50,
        fontSize: 32,
        color: Colors.color4,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default DieSelectionButton;
