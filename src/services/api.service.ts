import { Pagination } from "@/lib/models/pagination";

class ApiService {
    private static instance: ApiService;
    private static BASE_URL = 'https://640480fa80d9c5c7bac94116.mockapi.io/api/v1';

    private constructor() {
    }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }
        return ApiService.instance;
    }

    public getBaseUrl = () => ApiService.BASE_URL;

    private getUrl = (url: string, params?: Pagination) => {
        if (params) {
            const query = Object.keys(params)
                .map((key: string) => {
                    // @ts-ignore
                    const value = params[key] as Pagination[keyof Pagination];
                    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
                })
                .join('&');
            return `${ApiService.BASE_URL}/${url}?${query}`;
        }

        return `${ApiService.BASE_URL}/${url}`;
    }

    public get = async <TData>(url: string, params?: Pagination): Promise<TData> => {
        const response = await fetch(this.getUrl(url, params));
        return response.json();
    };

    public post = async <T, KData>(url: string, data: KData): Promise<KData> => {
        const response = await fetch(this.getUrl(url), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    public put = async <T, KData>(url: string, data: KData): Promise<KData> => {
        const response = await fetch(this.getUrl(url), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    public delete = async (url: string) => {
        const response = await fetch(this.getUrl(url), {
            method: 'DELETE'
        });
        return response.json();
    }

    public patch = async <T, KData>(url: string, data: KData): Promise<KData> => {
        const response = await fetch(this.getUrl(url), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
}

export default ApiService.getInstance();