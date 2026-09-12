import './AnimationControls.css'

function AnimationControls({ isPlaying, onToggle }) {
  return (
    <div className="controls">
      <button
        type="button"
        className="controls__button"
        onClick={onToggle}
        aria-pressed={isPlaying}
      >
        {isPlaying ? '⏸ 춤 멈추기' : '▶ 춤 시작하기'}
      </button>
      <p className="controls__hint">
        버튼을 클릭하거나 <kbd>Enter</kbd>/<kbd>Space</kbd> 키를 눌러보세요.
      </p>
    </div>
  )
}

export default AnimationControls
