import { View, Text, StyleSheet } from "react-native";
import Colors from "../colors";

function DieSelectionButton({ numSides, count }) {
    return (
        <View style={styles.container}>
            <View style={styles.pressArea}>
                <Text>{numSides}</Text>
            </View>
            {[...Array(count)].map((e, i) => (
                <View style={styles.item} key={i}>
                    <Text>{i+1}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    pressArea: {
        //borderWidth: 1,
        borderRadius: 6,
        padding: 8,
        backgroundColor: Colors.color4,
        width: 100,
        height: 100,
        shadowColor: 'black',
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        marginRight: 5,
        marginBottom: 5

    },

    item: {
        //borderWidth: 1,
        //borderRadius: 6,
        padding: 8,
        backgroundColor: Colors.color1,
        shadowColor: 'black',
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        height: '50%',
        flex: 1,
        marginRight: 5,
        marginBottom: 5
    }
});

export default DieSelectionButton;
