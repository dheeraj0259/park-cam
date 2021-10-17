import customAxios from "./axios";

export const getUsers = async() => {
    return await customAxios.get("/users");
}

export const addUser = async(userInfo) => {
    return await customAxios.post("/users", userInfo);
}