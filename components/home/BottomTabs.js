import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS, FONTS, SIZES } from "../../constants";

const BottomTabs = () => {
  return (
    <View
      style={{
        borderTopLeftRadius: SIZES.large,
        borderTopRightRadius: SIZES.large,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          marginHorizontal: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Icon name="home" text="Home" />
        <Icon name="search" text="Browser" />
        <Icon name="shopping-bag" text="Grocery" />
        <Icon name="receipt" text="Orders" />
        <Icon name="user" text="Account" />
      </View>
    </View>
  );
};

export default BottomTabs;

const Icon = (props) => {
  const { name, text } = props;
  return (
    <TouchableOpacity>
      <FontAwesome5
        name={name}
        size={25}
        style={{
          alignSelf: "center",
          marginBottom: 3,
        }}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
