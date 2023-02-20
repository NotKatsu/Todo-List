import { createTheme } from "@nextui-org/react";

const darkDefaultTheme = createTheme({
    type: "dark",
    theme: {
        fonts: {
            sans: "Rubik, sans-serif",
        },
        colors: {
            white: "#1B1B1A",
            black: "#212121",
        },
    },
});

export default darkDefaultTheme;
