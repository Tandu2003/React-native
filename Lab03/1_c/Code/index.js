import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Index = () => {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]} // Gradient màu bạn muốn áp dụng
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 60,
            fontWeight: "700",
            lineHeight: 70.31,
            textAlign: "center",
          }}
        >
          CODE
        </Text>
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
            fontSize: 20,
            fontWeight: "700",
            lineHeight: 23.44,
            textAlign: "center",
          }}
        >
          VERIFICATION
        </Text>
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
            fontSize: 15,
            fontWeight: "700",
            lineHeight: 17.58,
            textAlign: "center",
          }}
        >
          Enter ontime password sent on
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 15,
            fontWeight: "700",
            lineHeight: 17.58,
            textAlign: "center",
          }}
        >
          ++849092605798
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <TextInput
            key={index}
            style={{
              width: 50,
              height: 50,
              borderWidth: 1,
              borderColor: "black",
              textAlign: "center",
              marginHorizontal: 0,
            }}
          />
        ))}
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
            width: 339,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E3C000",
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
            VERIFY CODE
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          width: 302,
          height: 53,
          top: -50,
          left: 60,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      ></View>
    </LinearGradient>
  );
};

export default Index;
