declare module 'handlebars' {
    export function compile(template: string): (context: unknown) => string;
}
