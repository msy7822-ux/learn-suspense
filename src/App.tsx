import React, { Suspense } from "react";
import { TrySuspense } from "./components/TrySuspense";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TrySuspense />
      </Suspense>
    </div>
  );
}

export default App;
