import apiService from "@/services/api.service";
import { Citizen } from "@/lib/models/citizen";
import { Pagination } from "@/lib/models/pagination";

/**
 * pattern: Singleton
 */
class CitizenService {
    private static instance: CitizenService;

    private constructor() {
    }

    public static getInstance(): CitizenService {
        if (!CitizenService.instance) {
            CitizenService.instance = new CitizenService();
        }
        return CitizenService.instance;
    }

    public async getCitizens({ page, limit }: Pagination): Promise<Citizen[]> {
        return apiService.get<Citizen[]>('citizens', { page, limit });
    }

    public async getCitizen(id: number): Promise<any> {
        return apiService.get<Citizen>(`citizens/${id}`);
    }

    public async createCitizen(citizen: Partial<Citizen>): Promise<any> {
        return apiService.post('citizens', citizen);
    }

    public async updateCitizen(citizen: Partial<Citizen>): Promise<any> {
        return apiService.put(`citizens/${citizen.id}`, citizen);
    }

    public async deleteCitizen(id: number): Promise<Citizen> {
        const response = await fetch(`https://640480fa80d9c5c7bac94116.mockapi.io/api/v1/citizens/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    }
}

export default CitizenService.getInstance();