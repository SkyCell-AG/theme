const skycellPrimaryPalette = {
    30: '#E0F7FF',
    50: '#C3E9F7',
    100: '#AADBEC',
    200: '#8BD1E8',
    300: '#6FCAE8',
    400: '#61C6E9',
    500: '#57B1CF',
    600: '#4C9BB5',
    700: '#4790A8',
    800: '#2C5969',
    main: '#61C6E9',
    light: '#AADBEC',
    dark: '#4C9BB5',
    contrastText: '#393939',
}

const skycellSecondaryPalette = {
    50: '#F7F7F7',
    100: '#EFEFEF',
    200: '#DFDFDF',
    300: '#D7D7D7',
    400: '#B7B7B7',
    500: '#939393',
    600: '#747474',
    700: '#6B6B6B',
    800: '#393939',
    900: '#191919',
    main: '#939393',
    light: '#D7D7D7',
    dark: '#393939',
}

const theme = {
    palette: {
        primary: skycellPrimaryPalette,
        secondary: skycellSecondaryPalette,
        common: {
            white: '#FFFFFF',
            black: '#000000',
            purple: '#CF3B8A',
            yellow: '#EDAE49',
            lightYellow: '#EEE172',
            green: '#17921F',
            red: '#D44848',
            beige: '#F0DEBF',
            orange: '#C27800',
        },
        action: {
            selected: '#6FCAE8',
        },
        info: {
            main: '#61C6E9',
        },
        success: {
            main: '#43A047',
        },
        error: {
            main: '#E22C2C',
        },
    },
    shape: {
        tabHeight: 41,
    },
    typography: {
        fontFamily: 'Roboto',
        h1: {
            fontSize: 36,
            fontWeight: 200,
            lineHeight: '43px',
            color: skycellSecondaryPalette[900],
        },
        h2: {
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: 0.26,
            lineHeight: '36px',
        },
        h3: {
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: 0.26,
            lineHeight: '24px',
            color: skycellSecondaryPalette[900],
        },
        h4: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '19px',
            color: skycellSecondaryPalette[600],
        },
        h5: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 'none',
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 300,
        },
        body1: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '19px',
            color: skycellSecondaryPalette[600],
        },
        caption: {
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: 0.4,
            lineHeight: '14px',
            color: skycellSecondaryPalette[500],
        },
        button: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '14px',
            letterSpacing: 1,
        },
        title: {
            fontSize: 72,
        },
        small: {
            fontSize: 10,
        },
    },
}

module.exports = theme
