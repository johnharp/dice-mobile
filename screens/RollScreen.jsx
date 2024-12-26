import { Text, StatusBar, StyleSheet, View } from 'react-native';

function RollScreen({dice})
{
    return (
        <>
            <StatusBar />
            <View style={styles.mainView}>
                <Text style={styles.text}>[Roll Screen]</Text>
                {dice.map(d => {
                    return d.count > 0 && <Text key={d.sides} style={styles.text}>
                        D {d.sides}: {d.count}
                    </Text>
                })}
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