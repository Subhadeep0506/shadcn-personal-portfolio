"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toISODate, monthShort, yearShort } from "@/lib/date";
import { Calendar } from "lucide-react";
import { handleCardMouseMove, handleCardMouseLeave } from "@/lib/mouse";

export default function CertificationCard({
  title,
  date,
  href,
  issuer,
  logoUrl,
  altText,
}: {
  title: string;
  date: string;
  href: string;
  issuer?: string;
  logoUrl?: string;
  altText?: string;
}) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full">
        <div className="size-12 rounded-full border bg-background/60 backdrop-blur-md flex items-center justify-center text-[8px] font-semibold">
          {monthShort(date) +" " + yearShort(date)}
        </div>
      </div>
      <div className="glass-card p-3" onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Avatar className="border size-10 bg-muted-background dark:bg-foreground">
              <AvatarImage src={logoUrl} alt={(altText || issuer || title) ?? title} className="object-contain" />
              <AvatarFallback>{(issuer || title)?.[0]}</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <h3 className="font-semibold leading-none text-sm sm:text-base truncate">{title}</h3>
              {issuer && (
                <div className="text-xs text-muted-foreground mt-1 truncate">{issuer}</div>
              )}
            </div>
          </div>
          <div className="text-xs text-muted-foreground ml-3 whitespace-nowrap inline-flex items-center gap-1">
            <Calendar className="size-3.5" />
            <time>{toISODate(date)}</time>
          </div>
        </div>
        <div className="mt-2">
          <Link href={href} target="_blank">
            <Badge className="px-2 py-1 text-[10px]">View</Badge>
          </Link>
        </div>
      </div>
    </li>
  );
}
