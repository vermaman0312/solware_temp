import { useAppSelector } from "@/hooks/useSelector";

export const useUnauthenticatedSelector = () => {

    const loginPayload = useAppSelector(
        (state) => state.unauthenticatedLogin.loginPayload
    );

    const loginResponse = useAppSelector(
        (state) => state.unauthenticatedLogin.loginResponse
    );

    return {
        loginPayload,
        loginResponse
    };
}