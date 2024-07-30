"use client";
import { sum, subtract, uppercase } from "@sdk/utils";
import { AppQueryClientProvider, TestQuery } from "@sdk/test";

export default function Home() {
  return (
    <div>
      <button>{subtract(sum(10, 30), 13)}</button>
      <AppQueryClientProvider>
        <TestQuery />
        <div>{JSON.stringify(uppercase({ name: "Nikita" }))}</div>
      </AppQueryClientProvider>
    </div>
  );
}
