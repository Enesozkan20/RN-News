import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import auth from "../index";

const { width, height } = Dimensions.get("window");

export default class Login extends React.Component {
  state = {
    mail: "",
    password: "",
    spinner: false,
  };
  // ilk renderdan sonra calisan metot
  componentDidMount() {
    auth.onAuthStateChanged((auth) => {
      if (auth) {
        this.setState({ spinner: true });
        this.goHome();
      }
    });
  }
  goHome() {
    this.props.navigation.navigate("Home");
  }
  login(email, password) {
    this.setState({ spinner: true });

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Giris basarili");
        this.setState({ spinner: false });
      })
      .catch((error) => {
        console.log("HATA:", error.message);
        this.setState({ spinner: false });
      });
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
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Haber-App</Text>
        </View>
        {this.state.spinner ? (
          <ActivityIndicator />
        ) : (
          <View>
            <TextInput
              style={{
                marginTop: 25,
                width: width - 20,
                marginLeft: 10,
                marginRight: 10,
                borderWidth: 2,
                borderColor: "red",
                padding: 10,
                borderRadius: 25,
              }}
              placeholder="Email Adresi"
              onChangeText={(mail) => this.setState({ mail })}
              autoCorrect={false}
              value={this.state.mail}
              keyboardType="email-address"
            />
            <TextInput
              style={{
                marginTop: 15,
                width: width - 20,
                marginLeft: 10,
                marginRight: 10,
                borderWidth: 2,
                borderColor: "red",
                padding: 10,
                borderRadius: 25,
              }}
              placeholder="Parola"
              // Sifre görünümü yapar
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              autoCorrect={false}
              value={this.state.password}
            />
            <TouchableOpacity
              onPress={() => this.login(this.state.mail, this.state.password)}
            >
              <View
                style={{
                  marginTop: 15,
                  width: width - 20,
                  marginLeft: 10,
                  marginRight: 10,
                  borderWidth: 2,
                  borderColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 15,
                  borderRadius: 33,
                }}
              >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Giris</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
