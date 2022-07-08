import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StatusBar, Text, View } from "react-native";
import HomeHeader from "../components/home/HomeHeader";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import BottomTabs from "../components/home/BottomTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { COLORS } from "../constants";
import { ScrollView } from "react-native";
import ViewCart from "../components/restaurantDetails/ViewCart";

const YELP_API_KEY =
  "rZN3nsUNq2FMvtJ_KRH5rDqXVNXEUfC42QY8n0mTUZcZUL5aTul-5nHackYRdwuaM7eS9niznWfEJfrJEvjNR9zQVtdj3psM1Me-JuSQ7i7ve9sd1ah8WczDyEC-YnYx";

const Home = ({ navigation }) => {
  const [restaurantData, setrestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpurl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setrestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        height: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          paddingVertical: 15,
          marginTop: StatusBar.currentHeight + 5,
        }}
      >
        <HomeHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
