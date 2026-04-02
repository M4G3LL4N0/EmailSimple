import { DashboardHeader } from '@/components/DashboardHeader';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { DailyBrief } from '@/components/DailyBrief';
import { ImportantThreads } from '@/components/ImportantThreads';
import { ActionItems } from '@/components/ActionItems';
import { CalendarSuggestions } from '@/components/CalendarSuggestions';
import { PriorityVisualization } from '@/components/PriorityVisualization';
import { FollowUpRisk } from '@/components/FollowUpRisk';
import { ReplySuggestions } from '@/components/ReplySuggestions';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#081220]">
      <DashboardHeader />
      
      <div className="container flex gap-8 pt-6">
        <DashboardSidebar />
        
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 pb-20">
          <div className="space-y-8">
            <DailyBrief />
            <ImportantThreads />
            <ActionItems />
          </div>
          
          <div className="space-y-8">
            <CalendarSuggestions />
            <PriorityVisualization />
            <FollowUpRisk />
            <ReplySuggestions />
          </div>
        </main>
      </div>
    </div>
  );
}
