import { AUTH, SIGNUP, GET_QUIZ } from "./urlConfig";

export const authenticate = async (credentials) => {
  try {
    const response = await fetch(AUTH.url, {
      method: AUTH.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    
    const data = await response.json();

    if(response.status === 200){
      return data;
    }else{
      throw new Error(data.message);
    } 
  } catch (error) {
    throw error;
  }
};
export const signup = async (userDetails) => {
  try {
    const response = await fetch(SIGNUP.url, {
      method: SIGNUP.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();

    if(response.status === 201){
      return data;
    }else{
      throw new Error(data.message);
    } 
  } catch (error) {
    throw error;
  }
};

export const fetchQuiz = async () => {
  try {
    const response = await fetch(GET_QUIZ.url, {
      method: GET_QUIZ.method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if(response.status === 200){
      return data;
    }else{
      throw new Error(data.message);
    } 
  } catch (error) {
    throw error;
  }
};
