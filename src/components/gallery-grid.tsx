"use client";

import Link from "next/link";
import React from "react";
import { Reorder, motion } from "framer-motion";

type GalleryItem = { src?: string; alt?: string; color?: string; height?: number; href?: string; __id: string };

type Props = { items: Omit<GalleryItem, "__id">[] };

export default function GalleryGrid({ items: initialItems }: Props) {
  const withIds = React.useMemo<GalleryItem[]>(
    () => initialItems.map((it, i) => ({ ...it, __id: `${it.src ?? it.color ?? "item"}-${i}` })),
    [initialItems]
  );
  const [items, setItems] = React.useState<GalleryItem[]>(withIds);

  React.useEffect(() => {
    setItems(withIds);
  }, [withIds]);

  return (
    <div className="space-y-4">
      <div className="inline-block rounded-md bg-foreground text-background px-3 py-1 text-sm">Gallery</div>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="columns-2 sm:columns-3 [column-gap:6px] [column-fill:_balance]"
      >
        {items.map((item) => {
          const content = item.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.alt || ""}
              loading="lazy"
              className="w-full h-auto block select-none [-webkit-user-drag:none]"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}       
            />
          ) : (
            <div className="w-full" style={{ background: item.color || "#e5e7eb", height: item.height || 160 }} />
          );

          const inner = (
            <div className="overflow-hidden rounded-md">
              {content}
            </div>
          );

          const Card = (
            <motion.div
              layout
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.4 }}
              className="cursor-grab active:cursor-grabbing"
            >
              {item.href ? (
                <Link href={item.href} target="_blank" draggable={false} onDragStart={(e) => e.preventDefault()}>
                  {inner}
                </Link>
              ) : (
                inner
              )}
            </motion.div>
          );

          return (
            <Reorder.Item
              key={item.__id}
              value={item}
              id={item.__id}
              drag
              dragElastic={0.3}
              dragMomentum={false}
              layout
              transition={{ type: "spring", stiffness: 170, damping: 14 }}
              className="mb-[6px] break-inside-avoid"
            >
              {Card}
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </div>
  );
}
