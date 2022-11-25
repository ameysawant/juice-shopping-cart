import { combineReducers } from "redux";
import { headerReducer } from "./header/HeaderReducer";
import { mainSliderReducer } from "./homepage/MainSliderReducer";
import { youtubeReducer } from "./homepage/YoutubeReducer";
import { aboutReducer } from "./homepage/AboutReducer";
import { productSliderReducer } from "./homepage/ProductSliderReducer";
import { teamReducer } from "./homepage/TeamReducer";
import { footerReducer } from "./footer/FooterReducer";
import { filterReducer } from "./products/FilterReducer";

const rootReducer = combineReducers({
  headerReducer,
  mainSliderReducer,
  youtubeReducer,
  aboutReducer,
  productSliderReducer,
  teamReducer,
  footerReducer,
  filterReducer,
});

export default rootReducer;
