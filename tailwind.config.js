export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(56, 189, 248, 0.12)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56,189,248,0.16), transparent 36%), linear-gradient(180deg, rgba(15,23,42,0.88), rgba(15,23,42,0.98))'
      }
    }
  },
  plugins: []
};
