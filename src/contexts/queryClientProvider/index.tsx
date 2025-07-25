"use client";

import { QueryClient, QueryClientProvider as QueryProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

export function QueryClientProvider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return <QueryProvider client={queryClient}>{children}</QueryProvider>;
}
