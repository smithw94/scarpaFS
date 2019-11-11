import {
  combineReducers
} from "redux";

import usersReducer from "./users_reducer";
import productsReducer from "./product_reducer";
import attributesReducer from "./attributes_reducer";
import prodAttrReducer from "./prod_attr_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productsReducer,
  attributes: attributesReducer,
  prodAttr: prodAttrReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;