"use client"
import styles from './page.module.css';
import Main from "@/app/pages/main";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className={styles.main}>
        <QueryClientProvider client={queryClient}>
            <Main/>
        </QueryClientProvider>
    </main>
  )
}
