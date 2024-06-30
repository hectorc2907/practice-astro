import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches/quer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify({
        query: {},
        options: {
          sort: {
            date_unix: "asc",
          },
          limit: 12,
        },
      }),
    },
  });
  const { docs: launches } = (await res.json()) as APISpaceXResponse;
  return launches;
};

export const getLaunchById = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v3/launches/${id}`);
  const launch = (await res.json()) as Doc;
  return launch;
};
