import { View } from "react-native";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = [
  {
    title: "Lasagna 01",
    description: "With butter, tomato and sauce bechmel",
    price: "13.50",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Lasagna 02",
    description: "With butter, tomato and sauce bechmel",
    price: "13.50",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    title: "Lasagna 03",
    description: "With butter, tomato and sauce bechmel",
    price: "13.50",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Lasagna 04",
    description: "With butter, tomato and sauce bechmel",
    price: "13.50",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    title: "Lasagna 05",
    description: "With butter, tomato and sauce bechmel",
    price: "13.50",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  },
  {
    title: "Lasagna 06",
    description: "With butter, tomato and sauce bechmel",
    price: "13.50",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
];

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;
