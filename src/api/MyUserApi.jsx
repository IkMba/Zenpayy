import { setCurrentUser,setIsAuthenticated } from "@/utils/registerSlice";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const BASE_URL = 'https://artemis-backend-6rvg.onrender.com';

export const useCreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createUserRequest = async (user) => {
    const response = await fetch(`${BASE_URL}/api/v1/users/signup`, {
      method: "POST",
      headers: {
        //   Authorization:`Bearer ${}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(user);
    const res = await response.json();
    const currentUser = res.data.user;


    if (!response.ok) {
      // console.log(res)
      throw new Error(res.error);
    }

    return currentUser;
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createUserRequest,
    onSuccess: (data) => {
      dispatch(setIsAuthenticated(true));
      dispatch(setCurrentUser(data));

      toast.success("User created successfully");
      navigate("/dashboard");
    },
    onError: (err) => 
      toast.error("Error creating user")

    
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
  const dispatch = useDispatch();
  const createUserRequest = async (user) => {
    const response = await fetch(`${BASE_URL}/api/v1/users/login`, {
      method: "POST",
      // credentials:'include',
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

    return currentUser;
  };

  const {
    mutateAsync: loginUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createUserRequest,
    onSuccess: (data) => {
      dispatch(setIsAuthenticated(true));
      dispatch(setCurrentUser(data));
      navigate("/dashboard");
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
    const response = await fetch(`${BASE_URL}/v1/users/login`, {
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
export const useIsLoggedIn = () => {
  const getLoggedIn = async () => {
    const response = await fetch(
      `http://127.0.0.1:4000/api/v1/users`,
      {
        method: "GET",
        headers: {
          //   Authorization:`Bearer ${}`,
          "Content-Type": "application/json",
        },
      }
    );

    // const res = await response.json();
    // const isAuthenticated = res.data.isAuthenticated;
    // console.log(isAuthenticated);

    // if (!response.ok) {
    //   throw new Error(res.error);
    // }

    return response.json();
  };
  const { data: isAuthenticated, isLoading } = useQuery(
    "getIsLoggedIn",
    getLoggedIn
  );


  return {
    isAuthenticated,
  };
};

