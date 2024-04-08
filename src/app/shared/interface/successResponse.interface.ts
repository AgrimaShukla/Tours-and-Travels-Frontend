export interface SuccessResponseInterface<T> {
    data: T;
    message: string;
    status: string;
}