import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { Picker } from "@react-native-picker/picker";

import { useContext } from 'react';
import { gameContext } from '../components/gameContext';

export default function UpdateGames() {
    const [currentGame, setCurrentGame] = useState(0);
    const { gameData, setGameData } = useContext(gameContext);

    const [name, setName] = useState(gameData[currentGame].name);
    const [price, setPrice] = useState(gameData[currentGame].price);
    const [rating, setRating] = useState(gameData[currentGame].rating);
    const [achievements, setAchievements] = useState(gameData[currentGame].achievements);
    const [cover, setCover] = useState(gameData[currentGame].image);

    const updateGameData = () => {

        const updatedData = {
            name: name,
            price: price,
            rating: rating,
            achievements: achievements,
            image: cover
        }

        gameData[currentGame] = updatedData
        setGameData(gameData)

    }

    const changeGameIndex = (value) => {
        const index = parseInt(value)
        setName(gameData[index].name);
        setPrice(gameData[index].price);
        setRating(gameData[index].rating);
        setAchievements(gameData[index].achievements);
        setCover(gameData[index].cover);
        setCurrentGame(index);
    }

    return (
        <>
            <Text>Game Index</Text>
            <Picker
                selectedValue={currentGame}
                onValueChange={(itemValue, itemIndex) =>
                    changeGameIndex(itemIndex)
                }>
                <Picker.Item label="Game 1" value="g1" />
                <Picker.Item label="Game 2" value="g2" />
                <Picker.Item label="Game 3" value="g3" />
            </Picker>

            <Text>Name</Text>
            <TextInput value={name} onChangeText={setName}/>

            <Text>Price</Text>
            <TextInput value={price} onChangeText={setPrice}/>

            <Text>Rating</Text>
            <TextInput value={rating} onChangeText={setRating}/>

            <Text>Achievements</Text>
            <TextInput value={achievements} onChangeText={setAchievements}/>

            <Picker
                selectedValue={cover}
                onValueChange={(itemValue, itemIndex) =>
                    setCover(itemValue)
                }>
                <Picker.Item label="Elden Ring" value="er" />
                <Picker.Item label="ER: Shadow of the Erdtree" value="sote" />
                <Picker.Item label="Dark Souls 3" value="ds3" />
                <Picker.Item label="DS3: The Ringed City" value="ds3RC" />
                <Picker.Item label="RDR2 1" value="rdr2" />
                <Picker.Item label="RDR2 2" value="rdr2_2nd" />
            </Picker>



            <Button title="Update" onPress={updateGameData}/>

        </>
    )

}
