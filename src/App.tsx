import React, { Suspense } from "react";
import { TrySuspense } from "./components/TrySuspense";
import { SometimesSuspend } from "./components/SometimesSuspend";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <TrySuspense /> */}
        {/* 50%の確率でサスペンド状態になるコンポーネント */}
        <SometimesSuspend />
      </Suspense>
    </div>
  );
}

export default App;
