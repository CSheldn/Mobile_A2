import { Text, View, Image, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();

    return (
        <View
            style={{
                alignItems: "center",
            }}
        >

        <Text>Welcome to Sheldon's Games</Text>
        <Button onPress={() => router.navigate("/games")} title="Games"></Button>

        </View>
    );
}
