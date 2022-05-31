export type BootstrapColor = 'primary' | 'secondary' | 'success' | 'danger'
    | 'warning' | 'info' | 'light' | 'dark' | 'body' | 'custom';
export type BootstrapBGColor = BootstrapColor | 'transparent';
export type BootstrapTextColor = BootstrapColor | 'muted' | 'white' | 'black-50' | 'white-50';
export type BootstrapButtonColor = BootstrapColor | 'outline-primary' | 'outline-secondary' | 'outline-success'
    | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark'

export interface BasicAlert {
    title?: string,
    message?: string,
    context?: string,
    color?: BootstrapColor,
    className?: string | object,
    canDismiss?: boolean,
}

export type BootstrapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BootstrapButtonSize = 'xs' | 'sm' | 'lg';


export interface InputField {
    field: string,
    value: string | number | boolean
}
