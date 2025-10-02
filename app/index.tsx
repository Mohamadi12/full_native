import { Link } from "expo-router";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Link href="/about">
        Go to About Page
      </Link>
    </View>
  );
}
