interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "blank" | "danger";
  onClick?: () => void;
  className?: string;
}
interface LinkProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "blank" | "danger";
  onClick?: () => void;
  className?: string;
  path: string;
}
interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
}
interface FooterItem {
  href: string;
  label: string;
}

interface FooterProps {
  item: FooterItem;
}
interface InputProps {
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  variant?: "primary" | "underline" | "minimal";
}
