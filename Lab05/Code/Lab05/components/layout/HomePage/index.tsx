import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

import infoPhone from "@/constants/InfoPhone";
import { useColor } from "@/components/navigation/ColorConText";

const HomePage = () => {
  const { color, setColor } = useColor();

  useEffect(() => {
    setColor(infoPhone.color.blue.uri);
  });

  return (
    <View
      style={{
        height: "100%",
        flex: 1,
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image
          source={color}
          style={{
            width: 301,
            height: 361,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: "Roboto",
          paddingHorizontal: 22,
          paddingVertical: 14,
          fontSize: 15,
          fontWeight: "400",
          lineHeight: 17.58,
          textAlign: "left",
        }}
      >
        {infoPhone.name}
      </Text>
      <View
        style={{
          paddingHorizontal: 22,
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {Array.from({ length: infoPhone.star }).map((_, index) => (
          <FontAwesome
            key={index}
            name="star"
            size={24}
            color="yellow"
            style={{
              marginRight: 5,
            }}
          />
        ))}
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 15,
            fontWeight: "400",
            lineHeight: 17.58,
            textAlign: "left",
            marginLeft: 20,
          }}
        >
          ({infoPhone.vote ? `Xem ${infoPhone.vote} đánh giá` : ""})
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 22,
          paddingVertical: 14,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 21.09,
            textAlign: "left",
          }}
        >
          {infoPhone.price} đ
        </Text>
        <Text
          style={{
            paddingHorizontal: 10,
            fontFamily: "Roboto",
            fontSize: 15,
            fontWeight: "700",
            lineHeight: 17.58,
            textAlign: "left",
            color: "#00000094",
            textDecorationLine: "line-through",
          }}
        >
          {`  ${infoPhone.price} đ  `}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 22,
          paddingVertical: 14,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 14.06,
            textAlign: "left",
            color: "#FA0000",
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Text
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            textAlign: "center",
            borderWidth: 1,
            borderColor: "#000000C7",
            lineHeight: 16,
            marginLeft: 10,
          }}
        >
          ?
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            height: 40,
            paddingHorizontal: 22,
            marginHorizontal: 22,
            flexDirection: "row",
            borderRadius: 10,
            alignItems: "center",
            borderWidth: 1,
            justifyContent: "space-between",
            borderColor: "#00000075",
            backgroundColor: "#C4C4C400",
          }}
          onPress={() => router.push("./OptionPage")}
        >
          <Text></Text>
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 15,
              fontWeight: "400",
              lineHeight: 17.58,
              textAlign: "left",
            }}
          >
            {Object.keys(infoPhone.color).length} MÀU-CHỌN LOẠI
          </Text>
          <FontAwesome name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          marginBottom: 20,
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            width: "90%",
            height: 44,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#CA1536",
            backgroundColor: "#EE0A0A",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto",
              fontSize: 20,
              fontWeight: "700",
              lineHeight: 23.44,
              textAlign: "left",
              color: "#F9F2F2",
            }}
          >
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
