import { Image, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../constants";

const categories = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick Up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
];

const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        paddingLeft: 30,
        marginVertical: 5,
        flexDirection: "row",
        paddingVertical: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <Category key={index} imgUrl={category.image} text={category.text} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const Category = (props) => {
  const { imgUrl, text } = props;
  return (
    <View style={{ marginRight: 30, alignItems: "center" }}>
      <Image
        source={imgUrl}
        style={{
          width: 40,
          height: 50,
          resizeMode: "contain",
        }}
      />
      <Text style={{ fontSize: 13, fontWeight: "900" }}>{text}</Text>
    </View>
  );
};
