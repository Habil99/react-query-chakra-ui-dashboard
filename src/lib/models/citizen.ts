export interface Citizen {
    id: number;
    name: string;
    email: string;
    phone: string;
    pin: string;
    date: string | Date;
    address: string;
    status: string;
    photo: string;
}

export type CitizenCreateValues = Omit<Citizen, "id">
