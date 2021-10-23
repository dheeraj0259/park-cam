import customAxios from "./axios";

export const getUsers = async() => {
    return await customAxios.get("/users");
}

export const getUser = async(params) => {
    return await customAxios.get("/users", { params });
}

export const addUser = async(userInfo) => {
    return await customAxios.post("/users", userInfo);
}

export const getLoggedInUser = async() => {
    return await customAxios.get("/loggedInUser");
}
export const setLogInUser = async(userInfo) => {
    return await customAxios.post("/loggedInUser", userInfo);
}