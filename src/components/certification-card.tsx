import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { toISODate, monthShort } from "@/lib/date";
import { Calendar } from "lucide-react";

export default function CertificationCard({
  title,
  date,
  href,
  issuer,
}: {
  title: string;
  date: string;
  href: string;
  issuer?: string;
}) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full">
        <div className="size-12 rounded-full border bg-background/60 backdrop-blur-md flex items-center justify-center text-xs font-semibold">
          {monthShort(date)}
        </div>
      </div>
      <div className="glass-card p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold leading-none text-sm sm:text-base">
            {title}
          </h3>
          <div className="text-xs text-muted-foreground ml-3 whitespace-nowrap inline-flex items-center gap-1">
            <Calendar className="size-3.5" />
            <time>{toISODate(date)}</time>
          </div>
        </div>
        {issuer && (
          <div className="text-xs text-muted-foreground mt-1">{issuer}</div>
        )}
        <div className="mt-2">
          <Link href={href} target="_blank">
            <Badge className="px-2 py-1 text-[10px]">View</Badge>
          </Link>
        </div>
      </div>
    </li>
  );
}
