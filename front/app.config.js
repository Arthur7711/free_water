// Load .env so process.env.GOOGLE_MAPS_API_KEY is available when Expo evaluates this config
require("dotenv").config();

const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY || "";

export default {
  expo: {
    name: "FREE_WATER",
    slug: "FREE_WATER",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    platforms: ["ios", "android", "web"],
    ios: {
      supportsTablet: true,
      config: {
        googleMapsApiKey,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      config: {
        googleMaps: {
          apiKey: googleMapsApiKey,
        },
      },
    },
    web: {
      favicon: "./assets/favicon.png",
      config: {
        googleMaps: {
          apiKey: googleMapsApiKey,
        },
      },
    },
  },
};
