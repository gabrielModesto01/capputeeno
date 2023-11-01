import { FilterType } from "@/types/filter-types";
import { PriorityType } from "@/types/priority-types";

export function getCategoryByType(type: FilterType) {
  if(type == FilterType.MUG) return "mugs"
  if(type == FilterType.SHIRT) return "t-shirts"
  return ""
}

export function getFildByPriority(priority: PriorityType) {
  if(priority == PriorityType.NEWS) return {field: "created_at", order: "ASC"}
  if(priority == PriorityType.BIGGEST_PRICE) return {field: "price_in_cents", order: "DSC"}
  if(priority == PriorityType.MINOR_PRICE) return {field: "price_in_cents", order: "ASC"}
  return {field: "sales", order: "DSC"}
}