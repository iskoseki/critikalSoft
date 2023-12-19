import { useDarkMode } from "../../context/DarkModeContext"

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useDarkMode(); 
 
  const className = isDarkMode ? 'bg-gray-900' : 'bg-slate-200';
  return <div className={className}>{children}</div>;
}
