import clsx from "clsx";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
}

const TYPOGRAPHY_STYLES = {
  heading: 'text-3xl font-bold mb-4',
  subheading: 'text-xl font-semibold mb-2',
  body: 'text-base leading-relaxed',
  caption: 'text-sm text-gray-500',
};

export const Typography: React.FunctionComponent<TypographyProps> = ({ variant = 'body', ...props }) => {
  return <p
    {...props}
    className={clsx(
      TYPOGRAPHY_STYLES[variant],
      props.className
    )} />;
};