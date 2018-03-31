import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from "react-native";

// import Picture from "../Picture/Picture";

export default class Home extends React.Component {
  // static navigationOptions = {
  //   header: null
  // };

  // renderPicture() {
  //   return <Picture />;
  // }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="dark-content" />
        {/* <TouchableOpacity
          onPress={() => {
            navigate("Picture", { navigation: this.props.navigation });
            this.renderPicture.bind(this);
          }}
        >
      </TouchableOpacity> */}
        <Text>Welcome home page</Text>
      </View>
    );
  }
}
