"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const queryClient = new QueryClient();
const ReactQueryContext = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
};

export default ReactQueryContext;
