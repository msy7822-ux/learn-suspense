const sleep = (ms: number) => {
  console.log("method called");
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const TrySuspense: React.FC = () => {
  throw sleep(1000);
};
