import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import type { ShortLink } from "../types"

const LOCAL_STORAGE_KEY = "karlShortLinks"

export const useLocalStorage = (
  defaultValue: ShortLink[]
): [ShortLink[], Dispatch<SetStateAction<ShortLink[]>>] => {
  // Initial state (get from localStorage or set defaultValue)
  const [shortLinks, setShortLinks] = useState<ShortLink[]>(() => {
    try {
      const localStorageShortLinks = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (!localStorageShortLinks) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultValue))
        return defaultValue
      } else {
        return JSON.parse(localStorageShortLinks)
      }
    } catch (error) {
      console.error("Couldn't get shortlinks from localStorage:", error)
      return []
    }
  })

  // Update localStorage when short links change.
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(shortLinks))
    } catch (error) {
      console.error("Couldn't save shortlinks to localStorage:", error)
    }
  }, [shortLinks])

  return [shortLinks, setShortLinks]
}
