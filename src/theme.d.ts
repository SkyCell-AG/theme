declare module '@skycell-ag/theme' {
    interface SkyTheme {
        palette:{
            primary: object,
            secondary: object,
            common: {
                white: string,
                black: string,
                purple: string,
                yellow: string,
                lightYellow: string,
                green: string,
                red: string,
            },
            action: {
                selected: string,
            },
            info: {
                main: string,
            },
            success: {
                main: string,
            },
            error: {
                main: string,
            },
        },
        shape: object,
        typography: object,
    }
}
