export interface ItineraryDetails{
    city: string;
    day: number;
    description: string;
}

export interface GetTourList<T>{
    itinerary_details: [T];
    price: number;
}