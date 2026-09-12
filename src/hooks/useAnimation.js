import { useCallback, useState } from 'react'

export function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying)

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const play = useCallback(() => setIsPlaying(true), [])
  const pause = useCallback(() => setIsPlaying(false), [])

  return { isPlaying, toggle, play, pause }
}
