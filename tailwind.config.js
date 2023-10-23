/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-lg': "url('https://images.unsplash.com/photo-1541875201440-e57ce2c30249?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'hero-sm': "url('https://images.unsplash.com/photo-1496151981150-6d7319e97e56?auto=format&fit=crop&q=80&w=1858&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        'hero-md': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F774056254685487590%2F&psig=AOvVaw0re7xljw1kfy6QSCaL60es&ust=1697861719119000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC-lvfhg4IDFQAAAAAdAAAAABAE')"  
      },
    },
  },
  plugins: [],
}

