// src/lib/identityActions.js

import netlifyIdentity from "netlify-identity-widget";

export function loginUser() {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata
    } = netlifyIdentity.currentUser();

    localStorage.setItem(
      "currentOpenUser",
      JSON.stringify({...app_metadata, created_at, confirmed_at, email, id, ...user_metadata})
    );
  }
}

export function logoutUser() {
  localStorage.removeItem("currentOpenUser");
}