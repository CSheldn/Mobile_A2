import { Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Game from "../components/game.jsx";
import Button from "../components/button.jsx";
import { useContext } from 'react';
import { gameContext } from "../components/gameContext.jsx";

const er = require("../assets/images/er.png")
const sote = require("../assets/images/sote.png")
const ds3 = require("../assets/images/ds3.png")
const ds3RC = require ("../assets/images/ds3RC.png")
const rdr2 = require("../assets/images/rdr2.png")
const rdr2_2nd = require("../assets/images/rdr2_2nd.png")

const images = { "er": er,      "ds3": ds3,     "rdr2":rdr2,
                 "sote": sote,  "ds3RC":ds3RC,  "rdr2_2nd":rdr2_2nd};

export default function Index() {
    const router = useRouter();
    const { gameData } = useContext(gameContext);
    const [gameIndex, setGameIndex] = useState(0);

    return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
        <Game gameData={gameData[gameIndex]} image={images[gameData[gameIndex].image]}/>

        <View
            style={{
                flexDirection: "row",
                marginTop: 20,
            }}
        >
        <Button setGame={setGameIndex} label="1" index={0} currentIndex={gameIndex}/>
        <Button setGame={setGameIndex} label="2" index={1} currentIndex={gameIndex}/>
        <Button setGame={setGameIndex} label="3" index={2} currentIndex={gameIndex}/>
        </View>

    </View>
  );
}

