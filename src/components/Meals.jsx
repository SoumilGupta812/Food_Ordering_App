import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import ErrorPage from "./ErrorPage";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    error,
    isLoading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  if (isLoading) return <p className="center">Loading Meals...</p>;
  if (error) return <ErrorPage title="Failed to fetch meals" message={error} />;
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
