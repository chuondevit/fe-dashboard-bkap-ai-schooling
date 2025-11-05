import { refreshSession } from "./api";

const originalFetch = globalThis.fetch.bind(globalThis);

type FetchArgs = Parameters<typeof fetch>;

async function executeFetch(input: FetchArgs[0], init: FetchArgs[1], token?: string) {
    const { headers: initHeaders, ...rest } = init || {};
    const headers = new Headers(initHeaders || {});

    if (token) {
        headers.set("Authorization", `Bearer ${token}`);
    }

    return originalFetch(input, {
        ...rest,
        headers,
    });
}

export async function authFetch(input: FetchArgs[0], init: FetchArgs[1] = {}): Promise<Response> {
    const currentToken = localStorage.getItem("token") || undefined;
    const hadToken = Boolean(currentToken);
    let response = await executeFetch(input, init, currentToken);

    if (response.status !== 401 || !hadToken) {
        return response;
    }

    try {
        const { accessToken } = await refreshSession();
        response = await executeFetch(input, init, accessToken);
        return response;
    } catch (error) {
        throw error;
    }
}
