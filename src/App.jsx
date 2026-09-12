import Layout from './components/Layout'
import DancingCat from './components/DancingCat'
import AnimationControls from './components/AnimationControls'
import { useAnimation } from './hooks/useAnimation'

function App() {
  const { isPlaying, toggle } = useAnimation(true)

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} />
      <AnimationControls isPlaying={isPlaying} onToggle={toggle} />
    </Layout>
  )
}

export default App
