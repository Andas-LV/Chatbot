"use client"
import styles from './page.module.css';
import ChatPage from './pages/Chatbot/page'
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className={styles.main}>
        <QueryClientProvider client={queryClient}>
            <ChatPage/>
        </QueryClientProvider>
    </main>
  )
}
