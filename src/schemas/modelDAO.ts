export interface JobPostDAO {
  title: string;
  description: string;
  location: string;
  hourlyPayRate: number;
}

export interface ApplicationDAO {
  name: string;
  currentJob: string;
  location: string;
}
