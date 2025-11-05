import { useEffect, useState } from "react";

export default function useTokenSync() {
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const checkToken = () => {
            const currentToken = localStorage.getItem("token");
            if (currentToken !== token) setToken(currentToken);
        };

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "token") {
                setToken(localStorage.getItem("token"));
            }
        };

        window.addEventListener("storage", handleStorageChange);
        const interval = setInterval(checkToken, 500);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, [token]);

    return token;
}
