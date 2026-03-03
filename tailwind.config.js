/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#312E81',
        'warm-beige': '#F3EEE6',
        'soft-cream': '#F8F4EC',
        'text-charcoal': '#1F2937',
        'text-muted': '#4B5563',
        'border-subtle': '#E5E0D8',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        elegant: '0.02em',
        'elegant-wide': '0.05em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        'carousel': 'carousel 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
