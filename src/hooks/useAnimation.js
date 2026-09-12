import { useCallback, useEffect, useState } from 'react'

const FOCUSABLE_TAGS = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT']

function isInteractiveElement(el) {
  if (!el) return false
  return FOCUSABLE_TAGS.includes(el.tagName) || el.isContentEditable
}

export function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying)

  const toggle = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  const play = useCallback(() => setIsPlaying(true), [])
  const pause = useCallback(() => setIsPlaying(false), [])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code !== 'Space' && e.code !== 'Enter') return
      // 버튼 등에 이미 포커스가 있으면 네이티브 클릭 동작과 중복 실행되므로 건너뜀
      if (isInteractiveElement(document.activeElement)) return

      e.preventDefault()
      toggle()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  return { isPlaying, toggle, play, pause }
}
