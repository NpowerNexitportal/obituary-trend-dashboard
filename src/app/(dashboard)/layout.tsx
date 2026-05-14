import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-slate-950 text-slate-100">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
