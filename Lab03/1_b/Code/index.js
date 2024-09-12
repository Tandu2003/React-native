import { Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Index = () => {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/image.png")}
          style={{ width: 105, height: 117 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: "700",
            lineHeight: 29.3,
            textAlign: "center",
          }}
        >
          FORGET
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 25,
            fontWeight: "700",
            lineHeight: 29.3,
            textAlign: "center",
          }}
        >
          PASSWORD
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          padding: 28,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 15,
            fontWeight: "700",
            lineHeight: 17.58,
            textAlign: "center",
            color: "#000000",
          }}
        >
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 305,
            height: 45,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#C4C4C4",
          }}
        >
          <Image
            source={require("../../assets/images/1713291.webp")}
            style={{
              width: 20,
              height: 20,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 15,
              fontWeight: "400",
              lineHeight: 17.58,
              textAlign: "center",
              color: "#000000",
            }}
          >
            Email
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 305,
            height: 45,
            backgroundColor: "#E3C000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 18,
              fontWeight: "700",
              lineHeight: 21.09,
              textAlign: "center",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </LinearGradient>
  );
};

export default Index;
