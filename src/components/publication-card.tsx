"use client";

import Link from "next/link";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, ChevronDown } from "lucide-react";
import React from "react";
import { toISODate } from "@/lib/date";

export default function PublicationCard({
  title,
  date,
  description,
  href,
}: {
  title: string;
  date: string;
  description: string;
  href: string;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="glass-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold leading-none text-sm sm:text-base">{title}</h3>
          <div className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1">
            <Calendar className="size-3.5" />
            <time>{toISODate(date)}</time>
          </div>
        </div>
        <button
          className="text-xs inline-flex items-center gap-1 rounded-md px-2 py-1 border hover:bg-muted/30"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          Details
          <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2"
      >
        <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </motion.div>
      <div className="mt-3">
        <Link href={href} target="_blank">
          <Badge className="px-2 py-1 text-[10px]">Read more</Badge>
        </Link>
      </div>
    </div>
  );
}
