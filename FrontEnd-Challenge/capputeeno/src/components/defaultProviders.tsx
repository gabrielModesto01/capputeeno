"use client"

import { FilterContextProvider } from "@/context/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
  children: ReactNode
}

const theme = {
  desktopBreakpoint: "1000px",
  tabletBreakpoint: "768px"
}
export default function DefaultProviders({ children } : DefaultProvidersProps){
    const client = new QueryClient();
    return(
      <QueryClientProvider client={client}>  
        <FilterContextProvider>
          <ThemeProvider theme = {theme}>
            {children}
          </ThemeProvider>
        </FilterContextProvider>
    </QueryClientProvider>
    )
}