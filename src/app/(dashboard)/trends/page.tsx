import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  Download, 
  RefreshCcw,
  ExternalLink
} from "lucide-react"

export default function TrendsPage() {
  const trends = [
    { id: 1, keyword: "John Doe Obituary", country: "USA", category: "Obituary", score: 98, volume: "50K+", source: "Google Trends", time: "10m ago", status: "BREAKOUT" },
    { id: 2, keyword: "Plane Crash London", country: "UK", category: "Accident", score: 85, volume: "12K+", source: "Twitter", time: "25m ago", status: "TRENDING" },
    { id: 3, keyword: "Jane Smith Funeral", country: "Canada", category: "Memorial", score: 72, volume: "5K+", source: "Local News", time: "1h ago", status: "RISING" },
    { id: 4, keyword: "Actor Name Death", country: "Global", category: "Celebrity", score: 95, volume: "200K+", source: "Top Stories", time: "2m ago", status: "VIRAL" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Live Trend Feed</h2>
          <p className="text-slate-400 mt-1">Showing real-time search spikes and breaking news.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-slate-900 border-slate-800 text-white hover:bg-slate-800">
            <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
          </Button>
          <Button variant="outline" className="bg-slate-900 border-slate-800 text-white hover:bg-slate-800">
            <Download className="w-4 h-4 mr-2" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input 
            placeholder="Search keywords..." 
            className="pl-10 bg-slate-900 border-slate-800 text-white"
          />
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Filter</Button>
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-800/50">
            <TableRow className="border-slate-800 hover:bg-transparent">
              <TableHead className="text-slate-400">S/N</TableHead>
              <TableHead className="text-slate-400">Keyword</TableHead>
              <TableHead className="text-slate-400">Country</TableHead>
              <TableHead className="text-slate-400">Category</TableHead>
              <TableHead className="text-slate-400 text-right">Trend Score</TableHead>
              <TableHead className="text-slate-400">Volume</TableHead>
              <TableHead className="text-slate-400">Source</TableHead>
              <TableHead className="text-slate-400">Status</TableHead>
              <TableHead className="text-slate-400 text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trends.map((trend, idx) => (
              <TableRow key={trend.id} className="border-slate-800 hover:bg-slate-800/30">
                <TableCell className="font-mono text-slate-500">{idx + 1}</TableCell>
                <TableCell className="font-medium text-white">{trend.keyword}</TableCell>
                <TableCell>{trend.country}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="border-slate-700 text-slate-300">
                    {trend.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-bold text-blue-400">{trend.score}</TableCell>
                <TableCell className="text-slate-400">{trend.volume}</TableCell>
                <TableCell className="text-slate-400 text-xs">{trend.source}</TableCell>
                <TableCell>
                  <Badge className={cn(
                    "font-bold",
                    trend.status === "BREAKOUT" ? "bg-rose-500/20 text-rose-500 border-rose-500/50" :
                    trend.status === "VIRAL" ? "bg-yellow-500/20 text-yellow-500 border-yellow-500/50" :
                    "bg-blue-500/20 text-blue-500 border-blue-500/50"
                  )}>
                    {trend.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ')
}
