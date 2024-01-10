"use client"
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Main from './pages/main';

const queryClient = new QueryClient();

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <Main/>
        </QueryClientProvider>
    );
};
