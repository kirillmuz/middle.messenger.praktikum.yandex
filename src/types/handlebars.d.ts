declare module 'handlebars' {
    // Здесь тип any, потому что контекстом может быть любой тип
    export function compile(template: string): (context: unknown) => string;
}
