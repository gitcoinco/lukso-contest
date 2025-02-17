"use client"

import { useState } from "react"
import { InfoIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

type tooltipProps = {
  text: string
}

export const info: { [key: string]: string } = {
  "tradingVolume": "The volume of the token traded",
  "uniqueTraders": "The number of unique wallets that have traded the token",
  "swapUsers": "The number of users who have completed at least 20 swaps.",
  "averageDaysHeld": "The average time (in days) that traded tokens were held before being sold.  This is calculated per second and extrapolated into a day.  ",
  "marketCap": "The market cap of the token",
  "btcOutperformance": "The ratio of the token's price to Bitcoin's price."
}


export default function IconWithTooltip({text}: tooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="inline-flex items-center justify-center w-4 h-4 rounded-full text-primary hover:bg-primary/10 focus:outline-none "
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="More information"
        >
          <InfoIcon className="w-5 h-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 text-sm bg-black text-white " side="top">
        {info[text] || text}
      </PopoverContent>
    </Popover>
  )
}