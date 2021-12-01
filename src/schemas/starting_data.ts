import { JobPost } from "./JobPost";

export const jobpostsData: JobPost[] = [
  {
    title: "devops",
    description: "kubernetes",
    location: "Toronto",
    hourlyPayRate: 40,
  },
];

export const startingDataMap = (array: any[]) => {
  array.map((jobpost) => jobpost);
};
