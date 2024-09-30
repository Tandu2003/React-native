import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";

const product = [
  {
    id: 1,
    name: "Cá nấu lẩu, nấu mì mini...",
    shop: "Devang",
    image: require("@/assets/images/Screen_01/ca_nau_lau.png"),
  },
  {
    id: 2,
    name: "1KG Bơ gà khô tỏi ớt",
    shop: "LTD Food",
    image: require("@/assets/images/Screen_01/ga_bo_toi.png"),
  },
  {
    id: 3,
    name: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    image: require("@/assets/images/Screen_01/xa_can_cau.png"),
  },
  {
    id: 4,
    name: "Đồ chơi dạng mô hình",
    shop: "Thế giới đồ chơi",
    image: require("@/assets/images/Screen_01/do_choi_dang_mo_hinh.png"),
  },
  {
    id: 5,
    name: "Lãnh đạo đơn giản",
    shop: "Minh Long Book",
    image: require("@/assets/images/Screen_01/lanh_dao_gian_don.png"),
  },
  {
    id: 6,
    name: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
    image: require("@/assets/images/Screen_01/hieu_long_con_tre.png"),
  },
  {
    id: 7,
    name: "Donal Trump Thiên tài lãnh đạo",
    shop: "America",
    image: require("@/assets/images/Screen_01/trump.png"),
  },
];

export default function Screen_01() {
  interface Product {
    id: number;
    name: string;
    shop: string;
    image: any;
  }

  const renderItem = (item: Product) => {
    return (
      <View
        style={{
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: "#C4C4C4",
          padding: 10,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: 80,
            height: 80,
            borderRadius: 5,
            marginRight: 10,
          }}
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                marginBottom: 5,
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#7D5B5B",
                  marginRight: 5,
                }}
              >
                Shop
              </Text>
              <Text
                style={{
                  color: "#FF0E0E",
                }}
              >
                {item.shop}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 88,
              height: 38,
              backgroundColor: "#F31111",
              padding: 10,
              borderRadius: 5,
              justifyContent: "flex-end",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Chat
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        marginTop: 40,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          backgroundColor: "#1BA9FF",
          height: 60,
        }}
      >
        <FontAwesome name="arrow-left" size={30} color={"#fff"} />
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          Chat
        </Text>
        <FontAwesome name="shopping-cart" size={30} color={"#fff"} />
      </View>

      <View
        style={{
          height: 80,
          backgroundColor: "#C4C4C4",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 32,
        }}
      >
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!</Text>
      </View>

      <FlatList
        data={product}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
      />

      <View>
        <Foundation name="list" size={24} color="black" />
        <MaterialCommunityIcons name="home-outline" size={24} color="blue" />
        <AntDesign name="back" size={24} color="blue" />
      </View>
    </View>
  );
}
