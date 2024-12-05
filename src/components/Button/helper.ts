export const sizeClass = (type: 'large' | 'medium' | 'small' = 'medium'): string => {
  const sizes = {
    large: 'h-8 min-w-[200px]',
    medium: 'h-10 min-w-[100px]',
    small: 'h-3',
  }

  return sizes[type] ?? ''
}
