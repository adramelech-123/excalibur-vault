import { User } from "../models/user";


async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init)

    if(response.ok) {
        return response
    }
    else {
        const errorBody = await response.json()
        const errorMessage = errorBody.error;
        if (response.status === 401) {
          console.log(`Unauthorized`)
        } else if (response.status === 409) {
          console.log('Conflict Error')
        } else {
          throw Error(
            "Request failed with status: " +
              response.status +
              " message: " +
              errorMessage
          );
        }
    }
}

export interface SignUpCredentials {
    username: string,
    email: string,
    password: string
}

export async function signUp(credentials:SignUpCredentials): Promise<User> {
    const response = await fetchData("http://localhost:5000/api/users/signup", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        }
    )

    return response?.json()
}