import React, { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";

import infoPhone from "@/constants/InfoPhone";
import { useColor } from "@/components/navigation/ColorConText";

const OptionPage = () => {
  const { color, setColor } = useColor();
  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 12,
          paddingVertical: 20,
        }}
      >
        <Image
          source={color}
          style={{
            width: 112,
            height: 132,
          }}
        />
        <Text
          style={{
            margin: 12,
            fontFamily: "Roboto",
            fontSize: 15,
            fontWeight: "400",
            lineHeight: 17.58,
            textAlign: "left",
            color: "#000000",
            width: 200,
          }}
        >
          {infoPhone.name.replace("-", " ")}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#C4C4C4",
          padding: 12,
        }}
      >
        <Text>Chọn một màu bên dưới:</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Object.keys(infoPhone.color).map((key) => (
            <TouchableOpacity
              key={key}
              onPress={() => {
                setColor(infoPhone.color[key as keyof typeof infoPhone.color].uri);
                setSelectedColor(key);
              }}
              style={{
                backgroundColor: infoPhone.color[key as keyof typeof infoPhone.color].code,
                width: 85,
                height: 80,
                margin: 12,
                borderColor: selectedColor === key ? "#fff" : "transparent",
                borderWidth: 2,
              }}
            />
          ))}
        </View>
        <View
          style={{
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              width: "100%",
              height: 44,
              backgroundColor: "#1952E294",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "#CA1536",
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
              XONG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OptionPage;
