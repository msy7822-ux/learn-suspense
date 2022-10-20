import { sleep } from "../libs/sleep";

export const TrySuspense: React.FC = () => {
  console.log("component is rendered");
  throw sleep(1000);
};
