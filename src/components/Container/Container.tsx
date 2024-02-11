import { useDarkMode } from "@/context/DarkModeContext";
export default function Container({ children }: { children: React.ReactNode }) {
  const className = " flex flex-col justify-center items-center";
  return <div className={className}>{children}</div>;
}
