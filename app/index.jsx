import { Text, View, Image } from "react-native";
import { useState } from "react";
import Game from "../components/game.jsx";
import Button from "../components/button.jsx"

const er = require("../assets/images/er.png")
const ds3 = require("../assets/images/ds3.png")
const rdr2 = require("../assets/images/rdr2.png")

const images = { "er": er, "ds3": ds3, "rdr2":rdr2 };

import gameData from "../assets/games.json";

export default function Index() {

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
