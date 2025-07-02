import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { gameContext } from "../components/gameContext";
import { useState } from 'react';
import gameObject from "../assets/games.json";

export default function RootLayout() {

    const [gameData, setGameData] = useState(gameObject);

    return (
        <gameContext.Provider value={{gameData, setGameData}}>
        <Tabs>
        <Tabs.Screen name="index"
            options = {{
            title: "Game Home",
            tabBarIcon: ({color}) => <MaterialIcons size={28} name="home"  color={color} />,
            }}
        />

        <Tabs.Screen name="updateGames"
            options = {{
            title: "Update Games",
            tabBarIcon: ({color}) => <MaterialIcons size={28} name="autorenew"  color={color} />,
            }}
        />

        <Tabs.Screen name="games"
            options = {{
            title: "Game Info",
            tabBarIcon: ({color}) => <MaterialIcons size={28} name="games"  color={color} />,
            }}
        />
        </Tabs>
        </gameContext.Provider>
    );
}
