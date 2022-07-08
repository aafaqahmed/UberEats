import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider, withTheme } from "react-native-elements";
import { COLORS, SIZES } from "../../constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default MenuItems = ({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
  marginBottom,
}) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: marginBottom ? 0 : 400 }}>
          {foods.map((food, index) => (
            <View key={index}>
              <View
                style={{
                  backgroundColor: COLORS.white,
                  padding: 10,
                  borderRadius: 20,
                  margin: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {hideCheckbox ? (
                  <></>
                ) : (
                  <BouncyCheckbox
                    iconStyle={{
                      borderColor: "lightgray",
                      borderRadius: 0,
                    }}
                    fillColor="green"
                    onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                    isChecked={isFoodInCart(food, cartItems)}
                  />
                )}
                <FoodInfo
                  food={food}
                  marginLeft={marginLeft ? marginLeft : 0}
                />
                <FoodImage food={food} />
              </View>
              <Divider
                width={0.5}
                orientation="vertical"
                style={{ marginHorizontal: 20 }}
              />
            </View>
          ))}
        </View>
        {/* <View style={{ paddingVertical: 50 }}></View> */}
      </ScrollView>
    </>
  );
};

const FoodInfo = ({ marginLeft, ...props }) => (
  <View
    style={{
      width: 240,
      marginVertical: 10,
      justifyContent: "space-evenly",
      marginLeft: marginLeft,
    }}
  >
    <Text
      style={{
        fontSize: SIZES.large,
        fontWeight: "600",
      }}
    >
      {props.food.title}
    </Text>
    <Text>{props.food.description}</Text>
    <Text style={{ fontWeight: "500" }}>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      style={{
        width: 100,
        height: 100,
        right: 30,
        borderRadius: SIZES.large,
        marginRight: 20,
        paddingRight: 10,
      }}
      source={{ uri: props.food.image }}
    ></Image>
  </View>
);
