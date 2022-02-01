module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#292524',
                secondary: '#7c3aed',
                error: '#e11d48',
                'light-gray-100': '#EFEFEF',
                'light-gray-200': '#E8E8E8'
            },
            fontFamily: {
                'sans': ['Poppins']
            },
            borderRadius: {
                'half': '50%'
            }
        },
    },
    plugins: [],
};
