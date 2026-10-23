# Auth0 On-Behalf-Of (OBO) Token Exchange Sample App

Sample app for On-Behalf-Of (OBO) token exchange to enable middle-tier services to preserve user identity and permissions when calling downstream APIs.

This project demonstrates how to:
- Authenticate a user with the Authorization Code + PKCE flow
- Validate JWT access tokens in a protected middle-tier API
- Exchange the user's access token for a downstream access token using OAuth 2.0 On-Behalf-Of (OBO) Token Exchange (RFC 8693)
- Call a downstream API while preserving the user's identity and delegated permissions (scopes)
- See exactly which tokens are issued and exchanged at each step of the flow

## Getting Started

Setup
- [Deploy Auth0 Configuration](./auth0-tenant/README.md)
- [Run the server](./server/README.md)
- [Run the client](./client/README.md)

Open [http://localhost:5173/](http://localhost:5173/) and login.

Check console output for OBO Flow Response JSON object containing downstreamAccessToken. Decode with [jwt.io](https://www.jwt.io/).

## Details

The client sends a POST request to `http://localhost:3000/obo-flow` with accessToken for the first API in the Authorization Header. The server uses this accessToken to get a new accessToken for the second API (downstream API).

Example downstream Access Token:
```json
{
  "iss": "https://dev-5gm1mr1z8nbmuhv7.us.auth0.com/",
  "sub": "auth0|6985132071f9fb6d9bce29b8",
  "aud": "https://obo-flow-api-2/",
  "iat": 1792770705,
  "exp": 1792774305,
  "scope": "read:books",
  "act": {
    "sub": "Xk51p6Gr0QJGx8TS3fbfWaPjG2Aja4pD",
    "act": {
      "sub": "7QJm25lYoRzYk55gQzkrAHeDi4OH6Oup"
    }
  },
  "azp": "Xk51p6Gr0QJGx8TS3fbfWaPjG2Aja4pD"
}
```

## System Design

![System Design](docs/system-design.png)

Diagram created using [Mermaid](https://mermaid.ai/open-source/).
