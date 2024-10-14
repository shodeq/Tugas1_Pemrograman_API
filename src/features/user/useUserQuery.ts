import axiosInstance from "../../libs/axios/Index";
import { useEffect, useState } from "react";
import {userQueryResponse} from "../../types/Index";

export const useUserQuery = () => {
  const [state, setState] = useState<userQueryResponse>({
    data: null
  });

  const refetch = async () => {
    try {
      const response = await axiosInstance.get("/user");
      console.log(response);
      setState({
        data: response.data.data,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isError: error instanceof Error ? error : new Error("Unknown error"),
      }));
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };
  useEffect(() => {
    refetch();
  }, []);

  return {
    ...state,
    refetch,
  };
};
