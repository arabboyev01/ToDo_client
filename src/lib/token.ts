import Cookies from "js-cookie"

export const setToken = (
  tokenName: string,
  tokenValue: string|undefined,
  options: any
) => {
  const defaultOptions = {
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
  }
  const token = tokenValue || ""
  const cookieOptions = { ...defaultOptions, ...options }

  Cookies.set(tokenName, token, cookieOptions);
}

export const getToken = (tokenName: string) => {
  return Cookies.get(tokenName)
}
