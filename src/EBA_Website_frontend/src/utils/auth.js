// src/utils/auth.js

// Replace with your actual admin principal from Plug or Internet Identity
export const ADMIN_PRINCIPAL = "aaaaa-aa"; // 👈 UPDATE THIS

// Check if the given principal is the admin
export function isAdmin(principal) {
  if (!principal) return false;
  return principal === ADMIN_PRINCIPAL || principal.toString() === ADMIN_PRINCIPAL;
}
