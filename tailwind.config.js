// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",   // for Next.js App Router
        "./pages/**/*.{js,ts,jsx,tsx}", // if you use /pages
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    300: "#1a1a1a", // or any dark hex code you want
                },
            },
        },
    },
};
