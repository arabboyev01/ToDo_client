import { goTrySync } from "go-try"
import React, { useCallback, useEffect, useState } from "react";

export function useSyncedState<T>(key: string,initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {

  const getValueFromStorage = useCallback(() => {
    const [error, result] = goTrySync(() =>
      JSON.parse(localStorage.getItem(key) ?? "")
    )
    return result ?? initialValue
}, [initialValue, key])

  const [state, setState] = useState<T>(() => getValueFromStorage())

  useEffect(() => {
    function handleStorageChange() {
      setState(getValueFromStorage)
    }

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    }
  }, [getValueFromStorage])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state])

  return [state, setState]
}
