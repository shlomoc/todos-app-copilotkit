"use client";

import { TasksList } from "@/components/TasksList";
import { TasksProvider } from "@/lib/hooks/use-tasks";
import { CopilotKit } from "@copilotkit/react-core"; 
import { CopilotSidebar } from "@copilotkit/react-ui"; 
import "@copilotkit/react-ui/styles.css"; 


export default function Home() {
  return (
<CopilotKit publicApiKey={process.env.NEXT_PUBLIC_COPILOT_PUBLIC_API_KEY!}>
      <TasksProvider>
        <TasksList />
      </TasksProvider>
      <CopilotSidebar />
    </CopilotKit>
  );
}
