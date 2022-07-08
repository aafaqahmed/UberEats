import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/restaurantDetails/MenuItems";
import firebase from "firebase";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Lasagna 03",
        description: "With butter, tomato and sauce bechmel",
        price: "13.50",
        image:
          "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginVertical: 20 }}
          source={require("../assets/animations/check-mark.json")}
          autoSize={false}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your Order at {restaurantName} has been placed for ${total}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
            marginBottom={true}
          />
        </ScrollView>
        <LottieView
          style={{
            height: 200,
            alignSelf: "center",
            marginBottom: 30,
          }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
