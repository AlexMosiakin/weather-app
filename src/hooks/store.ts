import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useCustomDispatch = () => 
    useDispatch<AppDispatch>()

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector