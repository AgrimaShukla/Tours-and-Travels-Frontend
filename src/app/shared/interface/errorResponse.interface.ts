export interface CustomErrorResponse{
    description: string;
    status: string;
}

export interface ErrorResponse<T>{
    error: T;
}