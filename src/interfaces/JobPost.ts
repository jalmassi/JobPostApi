export interface JobPost {
    id: number;
    title: string;
    description: string;
    location: string;
    hourlyPayRate: number;

    createdAt: Date;
    updatedAt: Date;
}