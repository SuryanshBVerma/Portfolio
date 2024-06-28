import { Icon } from "@iconify/react";
import { cn } from "../../lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    repo: string;
    tags: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-300 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card tags={item.tags} link={item.link} repo={item.repo}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  link,
  repo,
  tags,
  className,
  children,
}: {
  tags: string[];
  link: string;
  repo: string;
  className?: string;
  children: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 h-56">
        <div className="p-4 ">{children}</div>
      </div>
      {isClient && (
        <div className="bottom-0 mt-2 ml-4 flex flex-col space-y-2">
          <div className="flex flex-wrap gap-2 space-x-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <a
              href={repo}
              target="_blank"
              className="text-2xl text-gray-500 dark:text-gray-400"
            >
              <Icon icon="tabler:brand-github" width={20} height={20} />
            </a>
            <a
              href={link}
              target="_blank"
              className="text-2xl text-gray-500 dark:text-gray-400"
            >
              <Icon icon="ci:external-link" width={22} height={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
