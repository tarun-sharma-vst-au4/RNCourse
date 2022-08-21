import { View, FlatList, StyleSheet, Pressable } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealsList from "../components/MealsList/MealsList";
const MealsOverviewScreen = ({ route, navigation }) => {
  const routeAlt = useRoute();
  const catID = route.params.categoryId;
  const catIDAlt = routeAlt.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catID
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation]);

  function pressHandler() {
    console.log("Comes here");
    navigation.navigate("MealsDetail", {
      categoryId: catID,
    });
  }

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
