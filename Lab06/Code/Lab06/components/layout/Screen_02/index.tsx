import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from "react-native";

interface Product {
  id: number;
  image: string;
  name: string;
  star: number;
  comment: number;
  price: number;
  discount: number;
}

export default function Screen_02() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/5fc93b70-e7a7-457f-a30f-b6c95d7ebac9")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => console.error(error));
  }, []);

  const renderItem = (item: Product) => {
    return (
      <View
        style={{
          width: "50%",
          alignItems: "center",
          padding: 12,
        }}
      >
        <Image source={{ uri: item.image }} width={155} height={90} />
        <Text
          style={{
            width: 144,
            paddingTop: 8,
            fontFamily: "Roboto",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 16.41,
            textAlign: "left",
          }}
        >
          {item.name}
        </Text>
        <View style={{}}>
          <View
            style={{
              paddingVertical: 4,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <Entypo
                  key={index}
                  name="star"
                  size={18}
                  color={index < item.star ? "yellow" : "#c4c4c4"}
                />
              );
            })}
            <Text
              style={{
                paddingLeft: 4,
                fontFamily: "Roboto",
                fontSize: 14,
                fontWeight: "400",
                alignContent: "center",
              }}
            >
              ({item.comment})
            </Text>
          </View>
          <View
            style={{
              paddingVertical: 4,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 14,
                fontWeight: "700",
                lineHeight: 14.06,
                textAlign: "left",
              }}
            >
              {item.price}
            </Text>
            <Text
              style={{
                paddingLeft: 12,
                fontFamily: "Roboto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 14.06,
                textAlign: "left",
                color: "#969DAA",
              }}
            >
              -{item.discount}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: 40,
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1BA9FF",
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#fff" />
        <View
          style={{
            paddingLeft: 8,
            paddingVertical: 4,
            paddingRight: 124,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Dây cáp usb" placeholderTextColor={"black"} />
        </View>
        <View
          style={{
            width: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FontAwesome name="shopping-cart" size={24} color="#fff" />
          <AntDesign name="ellipsis1" size={24} color="#fff" />
        </View>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={{
          marginBottom: 40,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#1BA9FF",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            alert(products.length);
          }}
        >
          <Foundation name="list" size={24} color="black" />
        </TouchableOpacity>
        <MaterialCommunityIcons name="home-outline" size={24} color="black" />
        <AntDesign name="back" size={24} color="black" />
      </View>
    </View>
  );
}
