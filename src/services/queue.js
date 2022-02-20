import { MAX_LENGTH } from "../constants";

export const queue = (list, newItem) => {
  if (list.length === MAX_LENGTH) {
    list.shift();
  }
  list.push(newItem);
  return list;
};
