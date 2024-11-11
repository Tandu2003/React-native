import { TouchableOpacity } from "react-native";
import { View, Text, TextInput, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/bikeSlice";

export default function EditBike({ navigation, route }) {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.data);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    sale: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  useEffect(() => {
    if (bikes.length > 0) {
      const uniqueCategories = Array.from(new Set(bikes.map((bike) => bike.category)));
      setCategories(uniqueCategories);
    }

    if (route.params?.bike) {
      setFormData(route.params.bike);
    }
  }, [bikes, route.params]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      let url = "https://671107fc4eca2acdb5f34d5b.mockapi.io/test/BikeApp";
      let method = "POST";
      let body = { ...formData };

      if (route.params?.bike) {
        url = `${url}/${route.params.bike.id}`;
        method = "PUT";
      } else {
        const timestamp = new Date().getTime();
        const randomSuffix = Math.floor(Math.random() * 1000);
        body.id = `${timestamp}${randomSuffix}`;

        try {
          const response = await fetch(url);
          if (response.ok) {
            const existingBikes = await response.json();
            if (Array.isArray(existingBikes) && existingBikes.length > 0) {
              const maxId = Math.max(...existingBikes.map((bike) => parseInt(bike.id)), 0);
              body.id = (maxId + 1).toString();
            }
          }
        } catch (error) {
          console.log("Using fallback ID generation due to fetch error");
        }
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        dispatch(fetchBikes());
        navigation.navigate("Admin");
      } else {
        console.error("Failed to save bike");
      }
    } catch (error) {
      console.error("Error saving bike:", error);
    }
  };

  const handleDelete = async () => {
    try {
      if (route.params?.bike) {
        Alert.alert(
          "Xác nhận xóa",
          "Bạn có chắc chắn muốn xóa xe này không?",
          [
            {
              text: "Hủy",
              style: "cancel",
            },
            {
              text: "Xóa",
              onPress: async () => {
                const url = `https://671107fc4eca2acdb5f34d5b.mockapi.io/test/BikeApp/${route.params.bike.id}`;
                const response = await fetch(url, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                });

                if (response.ok) {
                  dispatch(fetchBikes());
                  navigation.navigate("Admin");
                } else {
                  console.error("Không thể xóa xe");
                }
              },
              style: "destructive",
            },
          ],
          { cancelable: true }
        );
      }
    } catch (error) {
      console.error("Error deleting bike:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {route.params?.bike ? "Edit Bike" : "Add Bike"}
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Name:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 5,
              padding: 10,
            }}
            placeholder="Enter bike name"
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Image URL:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 5,
              padding: 10,
            }}
            placeholder="Enter image URL"
            value={formData.image}
            onChangeText={(text) => handleChange("image", text)}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Price:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 5,
              padding: 10,
            }}
            placeholder="Enter price"
            keyboardType="numeric"
            value={formData.price?.toString()}
            onChangeText={(text) => handleChange("price", text)}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Description:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 5,
              padding: 10,
              height: 100,
            }}
            placeholder="Enter description"
            multiline={true}
            numberOfLines={4}
            value={formData.description}
            onChangeText={(text) => handleChange("description", text)}
          />
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Category:</Text>
          <Picker
            selectedValue={formData.category}
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 5,
            }}
            onValueChange={(value) => handleChange("category", value)}
          >
            {categories.map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <View style={{ marginBottom: 15 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>Sale Percentage:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 5,
              padding: 10,
            }}
            placeholder="Enter sale percentage"
            keyboardType="numeric"
            value={formData.sale?.toString()}
            onChangeText={(text) => handleChange("sale", text)}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "purple",
            padding: 15,
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={handleSave}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Save Bike</Text>
        </TouchableOpacity>

        {route.params?.bike && (
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: "purple",
              padding: 15,
              borderRadius: 5,
              alignItems: "center",
            }}
            onPress={handleDelete}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Delete Bike</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{ position: "absolute", bottom: 0, width: "100%", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Admin")}
          style={{
            backgroundColor: "purple",
            borderRadius: 10,
            width: 150,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>Go to Admin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
