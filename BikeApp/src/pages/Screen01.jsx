import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen01({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginTop: 70, textAlign: "center", width: "80%" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          width: "90%",
          backgroundColor: "purple",
          alignContent: "center",
          padding: 20,
          borderRadius: 30,
        }}
      >
        <Image
          style={{ width: 292, height: 270 }}
          source={{
            uri: "https://res.cloudinary.com/dzcc5diot/image/upload/v1731304087/download_mdgcnd.png",
          }}
        />
      </View>
      <View style={{ marginTop: 20, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>POWER BIKE</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>SHOP</Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: "purple",
          borderRadius: 10,
          width: "80%",
        }}
        onPress={() => navigation.navigate("Screen02")}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Get Started
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: "purple",
          borderRadius: 10,
          width: "80%",
        }}
        onPress={() => navigation.navigate("Admin")}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          Go to Admin
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
