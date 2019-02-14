import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import React, { PureComponent } from "react";

import { FloatingAction } from "react-native-floating-action";
import Property from "../components/Property";

class FloatingActionRightScreen extends PureComponent {
  static navigationOptions = {
    title: "Right position"
  };

  render() {
    const actions = [
      {
        text: "Accessibility",
        icon: require("../images/ic_accessibility_white.png"),
        name: "bt_accessibility",
        position: 2
      },
      {
        text: "Language",
        icon: require("../images/ic_language_white.png"),
        name: "bt_language",
        position: 1
      },
      {
        text: "Location",
        icon: require("../images/ic_room_white.png"),
        name: "bt_room",
        position: 3
      },
      {
        text: "Video",
        icon: require("../images/ic_videocam_white.png"),
        name: "bt_videocam",
        position: 4
      }
    ];

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Property
            propertyName="actionsPaddingTopBottom"
            propertyValue="18"
            defaultValue="8"
          />
          <FloatingAction
            actions={actions}
            actionsPaddingTopBottom={18}
            style={styles}
            onPressItem={name => {
              Alert.alert("Icon pressed", `the icon ${name} was pressed`);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const button = {
  buttonContainer: {
    backgroundColor: "#000"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#000",
    zIndex: 2,
    width: 5,
    height: 5,
    borderRadius: 0,
    alignItems: "stretch",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5
    }
  }
});

export default FloatingActionRightScreen;
