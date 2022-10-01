import { combineReducers } from "redux";
import { headerReducer } from "./header/HeaderReducer";
import { mainSliderReducer } from "./homepage/MainSliderReducer";
import { youtubeReducer } from "./homepage/YoutubeReducer";
import { aboutReducer } from "./homepage/AboutReducer";
import { productSliderReducer } from "./homepage/ProductSliderReducer";
import { teamReducer } from "./homepage/TeamReducer";

const rootReducer = combineReducers({
  headerReducer,
  mainSliderReducer,
  youtubeReducer,
  aboutReducer,
  productSliderReducer,
  teamReducer,
});

export default rootReducer;
