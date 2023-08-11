export default function KeyWord(props: any) {
  if (props.link == "true") {
    if (props.no_bg == "true") {
      return (
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="hover:text-dark-main-bg dark:hover:text-light-main-bg hover:underline underline-offset-4">{ props.children }</a>
      )
    }
    return (
      <span className="px-1 bg-stone-300 dark:bg-stone-500 text-black dark:text-white hover:p-1 hover:underline decoration-dotted underline-offset-4 rounded-md">
        <a href={props.url} target="_blank" rel="noopener noreferrer">{ props.children }</a>
      </span>
    )
  } else if (props.simple == "true") {
    return (
      <span className="px-1 bg-stone-300 dark:bg-stone-500 text-black dark:text-white hover:p-1 rounded-md">
        { props.children }
      </span>
    )
  }
  return (
    <span>
      { props.children }
    </span>
  )
}