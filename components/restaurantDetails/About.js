import { View, Image, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { COLORS, SIZES } from "../../constants";

const About = (props) => {
  const { name, image, price, rating, reviews, categories } =
    props.route.params;

  const formatedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formatedCategories} ${
    price ? " • " + price : ""
  } 💵 • ${rating} ⭐ • (${reviews}+)`;

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
      <Divider width={1.8} style={{ marginTop: 20 }} />
    </View>
  );
};

export default About;

const RestaurantImage = (props) => {
  return (
    <Image
      style={{ width: "100%", height: 200 }}
      source={{ uri: props.image }}
    />
  );
};

const RestaurantTitle = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        fontWeight: "800",
        marginVertical: 10,
        marginHorizontal: SIZES.font,
      }}
    >
      {props.name}
    </Text>
  );
};

const RestaurantDescription = (props) => {
  return (
    <Text
      style={{
        fontSize: SIZES.medium,
        marginHorizontal: SIZES.font,
      }}
    >
      {props.description}
    </Text>
  );
};
