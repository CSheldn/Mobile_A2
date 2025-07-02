import { Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

import { useContext } from 'react';
import { gameContext } from '../components/gameContext';

export default function UpdateGames() {
    const [currentGame, setCurrentGame] = useState(0);
    const { gameData, setGameData } = useContext(gameContext);

    const [name, setName] = useState(gameData[currentGame].name);
    const [price, setPrice] = useState(gameData[currentGame].price);
    const [rating, setRating] = useState(gameData[currentGame].rating);
    const [achievements, setAchievements] = useState(gameData[currentGame].achievements);

    const updateGameData = () => {

        const updatedData = {
            name: name,
            price: price,
            rating: rating,
            achievements: achievements,
            image: "er"
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
        setCurrentGame(index);
    }

    return (
        <>
            <Text>Game Index</Text>
            <TextInput value={currentGame.toString()} onChangeText ={changeGameIndex}/>

            <Text>Name</Text>
            <TextInput value={name} onChangeText={setName}/>

            <Text>Price</Text>
            <TextInput value={price} onChangeText={setPrice}/>

            <Text>Rating</Text>
            <TextInput value={rating} onChangeText={setRating}/>

            <Text>Achievements</Text>
            <TextInput value={achievements} onChangeText={setAchievements}/>

            <Button title="Update" onPress={updateGameData}/>

        </>
    )

}
