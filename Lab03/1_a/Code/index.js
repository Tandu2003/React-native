import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Index = () => {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              borderWidth: 15,
              borderColor: "black",
              marginBottom: 30,
            }}
          ></View>
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
            GROW
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
            YOUR BUSINESS
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 20,
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
            We will help you to grow your business using online server
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 125,
              height: 45,
              marginRight: 10,
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
                justifyContent: "center",
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 125,
              height: 45,
              marginLeft: 10,
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
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
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
            HOW WE WORK?
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Index;
