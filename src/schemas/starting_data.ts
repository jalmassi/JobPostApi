import { JobPostDAO, ApplicationDAO } from "./modelDAO";

export const jobpostsData: JobPostDAO[] = [
  {
    title: "devops",
    description: "kubernetes",
    location: "Toronto",
    hourlyPayRate: 40,
  },
];

export const applicationsData: ApplicationDAO[] = [
  {
    name: "George",
    currentJob: "software engineer",
    location: "Toronto",
  },
];

export const startingDataMap = (array: any[]) => {
  array.map((jobpost) => jobpost);
};
