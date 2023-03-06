export interface Citizen {
    id: number;
    name: string;
    email: string;
    phone: string;
    pin: string;
    date: string | Date;
    address: string;
    status: string;
    [key: string]: number | string | Date;
}

export type CitizenCreateValues = Omit<Citizen, "id">
