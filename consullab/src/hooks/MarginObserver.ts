import { useRef, useState, useEffect, useCallback } from 'react'

// Função de debounce para limitar a frequência de atualizações
const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export const useMarginObserver = () => {
  const [leftMargin, setLeftMargin] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)

  const calculateMargin = useCallback(() => {
    if (ref.current) {
      const leftMargin = ref.current.getBoundingClientRect().left
      setLeftMargin(leftMargin)
    }
  }, [])

  useEffect(() => {
    const debouncedCalculateMargin = debounce(calculateMargin, 100)

    // Calcular a margem inicial
    calculateMargin()

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', debouncedCalculateMargin)

    // Configurar o Intersection Observer
    const observer = new IntersectionObserver(calculateMargin, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    // Limpeza
    return () => {
      window.removeEventListener('resize', debouncedCalculateMargin)
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [calculateMargin])

  return { ref, leftMargin }
}