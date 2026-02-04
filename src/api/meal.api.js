import { MEAL_RESOURCE_URL } from "../constants/url";
import api from "./api";

export function getAll() {
  return api.get(MEAL_RESOURCE_URL);
}

export function getOne(mealId) {
  if (!mealId) {
    throw new Error("No ID provided!");
  }

  return api.get(`${MEAL_RESOURCE_URL}/${mealId}`);
}

export function getAllByCategoryId(categoryId) {
  if (!categoryId) {
    throw new Error("No Category provided!");
  }

  return api.get(`${MEAL_RESOURCE_URL}?categoryId=${categoryId}`);
}

export function getFeatured() {
  return api.get(`${MEAL_RESOURCE_URL}?featured=true`);
}
