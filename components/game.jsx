
import { Text, View, Image, StyleSheet } from "react-native";

export default function Game( {gameData, image} ) {

    return (
        <>
            <Image source={image} style={styles.image}/>
            <Text>Title: {gameData.name}</Text>
            <Text>Price: {gameData.price}</Text>
            <Text>Personal Rating: {gameData.rating}</Text>
            <Text>Achievement Progress: {gameData.achievements}</Text>
        </>
        )

    }

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 225,
    },
});

