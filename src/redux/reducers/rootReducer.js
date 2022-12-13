import { combineReducers } from "redux";
import { headerReducer } from "./header/HeaderReducer";
import { mainSliderReducer } from "./homepage/MainSliderReducer";
import { youtubeReducer } from "./homepage/YoutubeReducer";
import { aboutReducer } from "./homepage/AboutReducer";
import { productSliderReducer } from "./homepage/ProductSliderReducer";
import { teamReducer } from "./homepage/TeamReducer";
import { footerReducer } from "./footer/FooterReducer";
import { filterReducer } from "./products/FilterReducer";
import { productListReducer } from "./products/ProdcutListReducer";
import { cartReducer } from "./products/CartReducer";

const rootReducer = combineReducers({
  headerReducer,
  mainSliderReducer,
  youtubeReducer,
  aboutReducer,
  productSliderReducer,
  teamReducer,
  footerReducer,
  filterReducer,
  productListReducer,
  cartReducer,
});

export default rootReducer;
