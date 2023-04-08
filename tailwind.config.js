/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
          "HomeMobile":"url('./assets/home/background-home-mobile.jpg')",
          "HomeDesktop":"url('./assets/home/background-home-desktop.jpg')",
          "DestinationMobile":"url('./assets/destination/background-destination-mobile.jpg')",
          "DestinationDesktop":"url('./assets/destination/background-destination-desktop.jpg')",
          "CrewMobile":"url('./assets/crew/background-crew-mobile.jpg')",
          "CrewDesktop":"url('./assets/crew/background-crew-desktop.jpg')",
          "TechnologyMobile":"url('./assets/technology/background-technology-mobile.jpg')",
          "TechnologyDesktop":"url('./assets/technology/background-technology-desktop.jpg')",
          
      },
      fontFamily:{
        BarlowCondensed: ['Barlow Condensed',' sans-serif'],
        Bellefair: ['Bellefair', 'serif'],
        Barlow: ['Barlow', 'sans-serif'],

       
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
    },
    boxShadow:{
      boxshadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
    }
  },
  plugins: [],
}
}