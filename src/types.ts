export type BootstrapColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'body';
export type BootstrapBGColor = BootstrapColor | 'transparent';
export type BootstrapTextColor = BootstrapColor | 'muted' | 'white' | 'black-50' | 'white-50';

export interface BasicAlert {
    title?: string,
    message?: string,
    context?: string,
    color?: BootstrapColor,
    className?: string | object,
}
