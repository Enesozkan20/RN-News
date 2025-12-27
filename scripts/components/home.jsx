import { get, getDatabase, ref } from "firebase/database";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default class Home extends React.Component {
  state = { haberler: [] };

  componentDidMount() {
    const db = getDatabase();
    const haberRef = ref(db, "haber");
    get(haberRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const haberlerArray = [];
          snapshot.forEach((item) => {
            const { detail, name, photo, uid } = item.val();
            haberlerArray.push({ detail, name, photo, uid });
          });
          this.setState({ haberler: haberlerArray });
          console.log("HABERLER:", haberlerArray);
        } else {
          console.log("Veri yok");
        }
      })
      .catch((error) => {
        console.log("HATA:", error);
      });
  }
  goDetail(item) {
    this.props.navigation.navigate("Detail",  item );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Haberler</Text>
        </View>

        <FlatList
          data={this.state.haberler}
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity onPress={() => this.goDetail(item)}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "red",
                    marginTop: 10,
                  }}
                >
                  {item.name}
                </Text>
                <Image
                  style={{
                    width: width - 20,
                    height: width * 0.75,
                    borderRadius: 25,
                  }}
                  source={{ uri: item.photo }}
                />
              </TouchableOpacity>

              <View
                style={{
                  borderWidth: 1,
                  height: 1,
                  width: width - 20,
                  marginTop: 10,
                }}
              />
            </View>
          )}
        />
      </View>
    );
  }
}
