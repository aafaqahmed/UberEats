import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants";

const HomeHeader = (props) => {
  return (
    <SafeAreaView
      style={{
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <HeaderTab
        title="Delivery"
        textColor={
          props.activeTab === "Delivery" ? COLORS.white : COLORS.primary
        }
        bgColor={props.activeTab === "Delivery" ? COLORS.primary : COLORS.white}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderTab
        title="Pickup"
        textColor={props.activeTab === "Pickup" ? COLORS.white : COLORS.primary}
        bgColor={props.activeTab === "Pickup" ? COLORS.primary : COLORS.white}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </SafeAreaView>
  );
};

export const HeaderTab = (props) => {
  const { title, textColor, bgColor, activeTab, setActiveTab } = props;
  return (
    <View>
      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: bgColor,
            color: textColor,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: SIZES.extraLarge,
            ...SHADOWS.dark,
          }}
          onPress={() => setActiveTab(title)}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
