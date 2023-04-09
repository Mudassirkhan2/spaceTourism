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
          "HomeTablet":"url('./assets/home/background-home-tablet.jpg')",
          "HomeDesktop":"url('./assets/home/background-home-desktop.jpg')",

          "DestinationMobile":"url('./assets/bg-destination/background-destination-mobile.jpg')",
          "DestinationTablet":"url('./assets/bg-destination/background-destination-tablet.jpg')",
          "DestinationDesktop":"url('./assets/bg-destination/background-destination-desktop.jpg')",

          "CrewMobile":"url('./assets/bg-crew/background-crew-mobile.jpg')",
          "CrewTablet":"url('./assets/bg-crew/background-crew-tablet.jpg')",
          "CrewDesktop":"url('./assets/bg-crew/background-crew-desktop.jpg')",

          "TechnologyMobile":"url('./assets/bg-technology/background-technology-mobile.jpg')",
          "TechnologyTablet":"url('./assets/bg-technology/background-technology-tablet.jpg')",
          "TechnologyDesktop":"url('./assets/bg-technology/background-technology-desktop.jpg')",
          
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