import { sleep } from "../libs/sleep";

export const SometimesSuspend: React.FC = () => {
  if (Math.random() < 0.5) {
    console.log("sleep method called");
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};
