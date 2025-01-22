import { setCurrentUser } from "@/utils/registerSlice";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.API_BASE_URL;

export const useCreateUser = () => {
  const navigate = useNavigate();
  const createUserRequest = async (user) => {
    const response = await fetch(`http://localhost:4000/api/v1/users/signup`, {
      method: "POST",
      headers: {
        //   Authorization:`Bearer ${}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(user);
    const res = await response.json();

    if (!response.ok) {
      // console.log(res)
      throw new Error(res.error);
    }
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createUserRequest,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => console.log(err.message),
  });

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};

export const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const createUserRequest = async (user) => {
      const response = await fetch(`http://localhost:4000/api/v1/users/login`, {
        method: "POST",
        headers: {
          //   Authorization:`Bearer ${}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const res = await response.json();
      const currentUser = res.data.user;
  
      if (!response.ok) {
        // console.log(res)
        throw new Error(res.error);
      }

      return currentUser
    };

    const {
      mutateAsync: loginUser,
      isLoading,
      isError,
      isSuccess,
    } = useMutation({
      mutationFn: createUserRequest,
      onSuccess: (data) => {
        navigate("/dashboard");
        dispatch(setCurrentUser(data))
      },
      onError: (err) => console.log(err.message),
    });
  
    return {
      loginUser,
      isLoading,
      isError,
      isSuccess,
    };
  };

export const getUser = () => {
  const fetchUser = async (user) => {
    const response = await fetch(`http://localhost:4000/api/v1/users/login`, {
      method: "POST",
      headers: {
        //   Authorization:`Bearer ${}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(user);
    const res = await response.json();

    if (!response.ok) {
      // console.log(res)
      throw new Error(res.error);
    }
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createUserRequest,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => console.log(err.message),
  });

  return {
    createUser,
    isLoading,
    isError,
    isSuccess,
  };
};
