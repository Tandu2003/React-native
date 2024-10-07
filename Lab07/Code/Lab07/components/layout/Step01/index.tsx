import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

export default function Step01() {
  interface Product {
    id: string;
    name: string;
    shop: string;
    image: string;
  }

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(0);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/b41ef2c7-7aee-4c16-b18f-88ad996d7c64")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [click]);

  const renderItem = ({ item }: { item: Product }) => {
    return (
      <View style={styles.itemRender}>
        <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
        <View>
          <Text>{item.name}</Text>
          <Text>{item.shop}</Text>
        </View>
      </View>
    );
  };

  const handleAdd = () => {
    console.log({ error });
    console.log({ data });
    setClick((prev) => prev + 1);
  };

  return (
    <View>
      <View>
        <TouchableOpacity style={styles.buttonClick} onPress={handleAdd}>
          <Text style={styles.textButton}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClick}>
          <Text style={styles.textButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClick}>
          <Text style={styles.textButton}>Delete</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={renderItem} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonClick: {
    backgroundColor: "blue",
    padding: 12,
    margin: 12,
    alignItems: "center",
    borderRadius: 4,
  },
  textButton: {
    color: "white",
    fontSize: 16,
  },
  itemRender: {
    flexDirection: "row",
    padding: 12,
    margin: 12,
    backgroundColor: "white",
    borderRadius: 4,
  },
});
