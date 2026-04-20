module.exports = function (api: any) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: ["react-native-reanimated/plugin"], // Doit toujours être le dernier de la liste
    };
};
