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
    <div className="min-h-screen bg-gradient-to-b from-[#070b17] to-[#0a0f1f]">
      <DashboardHeader />
      
      <div className="container flex gap-8 pt-8">
        <DashboardSidebar />
        
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 pb-20">
          {/* Left Column */}
          <div className="space-y-8">
            <DailyBrief />
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-2">
                <PriorityView />
              </div>
              <DeadlineTimeline />
              <ActionCenter />
            </section>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <FollowUpRadar />
            <AIReplyAssist />
            <CalendarSuggestions />
          </div>
        </main>
      </div>
    </div>
  );
}
