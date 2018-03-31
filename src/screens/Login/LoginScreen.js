import React from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from "react-native";

import axios from "axios";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "johndoe@gmail.com",
    password: "azerty",
    data: null
  };

  signUpUser = (email, password, username, cb) => {
    axios
      .post("http://localhost:3000/user/sign_up", {
        email,
        password,
        username
      })
      .then(function(response) {
        //console.log(response);
        cb(response);
      })
      .catch(function(error) {
        console.log(error);
        alert(error.response.data.error);
      });
  };

  // Send request to server and check authorisation

  logInUser = (email, password, cb) => {
    axios
      .post("http://localhost:3000/user/log_in", {
        email,
        password
      })
      .then(function(response) {
        //isLoad = true;
        console.log(response);
        // this.setState({
        //   isLoading: true
        // });
        cb(response);
      })
      .catch(function(error) {
        //console.log(error.response);
        alert(error.response.data.error);
      });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require("./LoginScreen.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <StatusBar barStyle="light-content" />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 30 }}>Welcome StreetArt App</Text>
        </View>
        <TextInput
          style={{
            borderColor: "white",
            borderBottomWidth: 1,
            fontSize: 25,
            paddingLeft: 10,
            width: "80%",
            height: 50,
            color: "white"
          }}
          keyboardType="email-address"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={{
            borderColor: "white",
            borderBottomWidth: 1,
            fontSize: 25,
            paddingLeft: 10,
            width: "80%",
            height: 50,
            color: "white"
          }}
          //secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableOpacity
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            marginBottom: 100
          }}
          onPress={() => {
            navigate("Home", { navigation: this.props.navigation });
            // this.logInUser(this.state.email, this.state.password, data => {
            //   navigate("Home", { navigation: this.props.navigation });
            //   this.setState({ data });
            // });
          }}
          data={this.state.data}
        >
          <Text
            style={{
              color: "black",
              backgroundColor: "white"
            }}
          >
            {" "}
            Login{" "}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
