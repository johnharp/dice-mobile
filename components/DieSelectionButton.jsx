import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../colors";

function DieSelectionButton({ numSides, img, count }) {
    return (
        <View style={styles.container}>
            <View style={styles.pressArea}>
                {!img && <Text>{numSides}</Text>}
                {img && <Image style={{width: 85, height: 85}} source={img} /> }
            </View>
            {[...Array(count)].map((e, i) => (
                <View style={styles.item} key={i}>
                    <Text >{i+1}</Text>
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
        flexDirection: 'row',
        padding: 8,
        backgroundColor: Colors.color1,
        shadowColor: 'black',
        shadowRadius: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        height: '30%',
        marginRight: 5,
        marginBottom: 5,
        alignItems: 'center',
        alignContent: 'center',
    }
});

export default DieSelectionButton;
