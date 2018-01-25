import DesignSystem from 'design-system-utils'

export const myDesignSystem = {
  type: {
    baseFontSize: '22px',
    sizes: {
      base: 22,
      s: 16,
      xs: 14,
      alt: 19,
      display: 44,
    },

    fonts: {
      base: '"Tiempos Text Regular", Times New Roman',
      bold: '"Tiempos Text Semibold", Times New Roman',
      alt: '"Courier Prime Medium", Courier, Monaco, monospace',
    },

    fontWeight: {
      base: 400,
      bold: 600
    },
  },

  colors: {
    brand: {
      primary: 'rgb(74, 74, 74)',
      secondary: 'rgb(255, 255, 255)'
    }
  },

  breakpoints: {
    s: '50rem'
  },

  spacing: {
    s: '0.8rem',
    base: '1rem',
    l: '2rem',
    alt: '1.2rem'
  },

  measure: '50rem',
}

export const ds = new DesignSystem(myDesignSystem, {
  fontSizeUnit: 'rem',
  useModularScale: false
})
