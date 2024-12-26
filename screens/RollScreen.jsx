import { Text, StatusBar, StyleSheet, View } from 'react-native';

function RollScreen()
{
    return (
        <>
            <StatusBar />
            <View style={styles.mainView}>
                <Text style={styles.text}>[Roll Screen]</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "stretch",
        marginTop: 45,
        marginBottom: 30,
    },

    text: {
        fontSize: 50,
        color: "white"
    }
});

export default RollScreen;