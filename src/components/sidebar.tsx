"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  Bell, 
  Globe, 
  PenTool, 
  Settings 
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Trends", href: "/trends", icon: TrendingUp },
  { name: "Breakouts", href: "/breakouts", icon: Zap },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Sources", href: "/sources", icon: Globe },
  { name: "AI Writer", href: "/ai-writer", icon: PenTool },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-slate-950 text-white h-screen border-r border-slate-800">
      <div className="p-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Obit Intel
        </h1>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                isActive 
                  ? "bg-slate-800 text-white" 
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              )}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center p-2 rounded-lg bg-slate-900">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            A
          </div>
          <div className="ml-3">
            <p className="text-xs font-medium">Admin User</p>
            <p className="text-[10px] text-slate-500">Premium Plan</p>
          </div>
        </div>
      </div>
    </div>
  )
}
