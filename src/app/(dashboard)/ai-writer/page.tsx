"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PenTool, Send, Copy, FileText } from "lucide-react"

export default function AIWriterPage() {
  const [topic, setTopic] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState("")

  const handleGenerate = () => {
    setIsGenerating(true)
    // Simulate generation
    setTimeout(() => {
      setResult(`[AI Generated Content for: ${topic}]\n\nIn a heartbreaking turn of events, the community mourns the loss of ${topic || 'a beloved individual'}...`)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">AI Content Intelligence</h2>
        <p className="text-slate-400 mt-1">Generate SEO-optimized obituaries and news reports using AI.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-slate-900 border-slate-800 text-white">
            <CardHeader>
              <CardTitle>Generator Settings</CardTitle>
              <CardDescription className="text-slate-500">Configure your content output style.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="topic">Name or Topic</Label>
                <Input 
                  id="topic" 
                  placeholder="e.g. John Smith Obituary" 
                  className="bg-slate-950 border-slate-800"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mode">Writing Mode</Label>
                <Select defaultValue="seo">
                  <SelectTrigger className="bg-slate-950 border-slate-800">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-800 text-white">
                    <SelectItem value="seo">SEO Optimized</SelectItem>
                    <SelectItem value="human">Humanized Rewrite</SelectItem>
                    <SelectItem value="bypass">AI Detector Bypass</SelectItem>
                    <SelectItem value="news">Breaking News Style</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="length">Target Length</Label>
                <Select defaultValue="medium">
                  <SelectTrigger className="bg-slate-950 border-slate-800">
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-800 text-white">
                    <SelectItem value="short">Short (300 words)</SelectItem>
                    <SelectItem value="medium">Medium (600 words)</SelectItem>
                    <SelectItem value="long">Long (1200 words)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCcw className="w-4 h-4 mr-2 animate-spin" /> Generating...
                  </>
                ) : (
                  <>
                    <PenTool className="w-4 h-4 mr-2" /> Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-full bg-slate-900 border-slate-800 text-white">
            <Tabs defaultValue="editor" className="w-full">
              <CardHeader className="flex flex-row items-center justify-between">
                <TabsList className="bg-slate-950">
                  <TabsTrigger value="editor">Editor</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="text-slate-400">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-slate-400">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <TabsContent value="editor" className="mt-0">
                  <textarea 
                    className="w-full h-[500px] bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Content will appear here..."
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                  />
                </TabsContent>
                <TabsContent value="preview" className="mt-0">
                  <div className="w-full h-[500px] overflow-y-auto bg-slate-950 border border-slate-800 rounded-lg p-8 prose prose-invert max-w-none">
                    {result ? (
                      <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-slate-600">
                        <FileText className="w-12 h-12 mb-4 opacity-20" />
                        <p>No content generated yet.</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}

function RefreshCcw(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  )
}
