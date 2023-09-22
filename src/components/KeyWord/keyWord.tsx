interface KeyWordProps {
  link?: boolean;
  no_bg?: boolean;
  url?: string;
  simple?: boolean;
  children: React.ReactNode;
}

export default function KeyWord({ link, no_bg, url, simple, children }: KeyWordProps) {
  if (link) {
    const commonClasses = "hover:text-dark-main-bg dark:hover:text-light-main-bg hover:underline underline-offset-4";
    if (no_bg) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={commonClasses}>
          {children}
        </a>
      );
    }
    return (
      <span className="px-1 bg-stone-300 dark:bg-stone-500 text-black dark:text-white hover:p-1 hover:underline decoration-dotted underline-offset-4 rounded-md">
        <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
      </span>
    );
  } else if (simple) {
    return (
      <span className="px-1 bg-stone-300 dark:bg-stone-500 text-black dark:text-white hover:p-1 rounded-md">
        {children}
      </span>
    );
  }
  return (
    <span>
      {children}
    </span>
  );
}
