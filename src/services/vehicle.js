import customAxios from "./axios";

export const getVehicles = async() => {
    return await customAxios.get("/vehicles");
}