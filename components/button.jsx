import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
    label: string;
};

export default function Button({ label, setGame, index, currentIndex }: Props) {
    const isActive = index === currentIndex;

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={[styles.button, isActive && styles.activeButton]}
                onPress={() => setGame(index)}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 80,
        height: 50,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#D3D3D3',
        borderRadius: 10,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
    buttonLabel: {
        color: 'black',
        fontSize: 16,

    },
    activeButton: {
        borderRadius: 25,
        backgroundColor: 'white',
    }
});

