import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Zap, Globe, AlertTriangle } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    { title: "Total Trends", value: "1,284", icon: TrendingUp, color: "text-blue-400" },
    { title: "Active Breakouts", value: "12", icon: Zap, color: "text-yellow-400" },
    { title: "Countries Monitored", value: "10", icon: Globe, color: "text-emerald-400" },
    { title: "Real-time Alerts", value: "45", icon: AlertTriangle, color: "text-rose-400" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Intelligence Overview</h2>
        <p className="text-slate-400 mt-2">Real-time monitoring across 10 global regions.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-slate-900 border-slate-800 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-slate-500 mt-1">+12% from last hour</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle>Trend Velocity</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center text-slate-500 italic">
            [Chart Placeholder: Trend velocity over time]
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle>Recent Breakouts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Famous Celebrity Obituary</p>
                    <p className="text-xs text-slate-500">2 minutes ago • USA</p>
                  </div>
                  <div className="text-xs font-bold text-yellow-400">+450%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
