import { createContext, useContext, useReducer } from "react";
import { useTripReducer } from "./reducers";

const SiteContext = createContext();
const { Provider } = SiteContext;

const SiteProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useTripReducer({
    trips: [],
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useSiteContext = () => {
  return useContext(SiteContext);
};

export { SiteProvider, useSiteContext };
