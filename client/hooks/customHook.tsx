import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useReduxStateHook = (navigation: any, path = "login") => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state: any) => state.user);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({
        type: "clearError",
      });
    }
    //for success case
    if (message) {
      alert(message);
      dispatch({
        type: "clearMessage",
      });
      navigation.reset({
        index: 0,
        routes: [{ name: path }],
      });
    }
  }, [error, message, dispatch]);

  return loading;
};
