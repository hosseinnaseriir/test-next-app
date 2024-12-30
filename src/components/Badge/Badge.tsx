import clsx from "clsx";


export const Badge: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div
    {...props}
    className={clsx(
      props.className,
      'h-fit py-1 px-3 max-w-fit rounded-full bg-black text-white'
    )}
  />;
}