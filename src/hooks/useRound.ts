import { useMemo } from 'react'

const useRound = (value: number | null): number | null => {
  return useMemo(() => {
    if (value === null) return null
    return Math.round(value)
  }, [value])
}

export default useRound
