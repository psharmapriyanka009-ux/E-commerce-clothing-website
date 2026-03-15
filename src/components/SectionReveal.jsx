import { useReveal } from '../hooks/useReveal'

function SectionReveal({ children, className = '' }) {
  const { ref, isVisible } = useReveal()

  return (
    <section ref={ref} className={`reveal ${isVisible ? 'visible' : ''} ${className}`.trim()}>
      {children}
    </section>
  )
}

export default SectionReveal
