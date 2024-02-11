// components/Logo.tsx

import { useTheme } from "next-themes";

const Logo: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 520"
      fill={resolvedTheme === "dark" ? "white" : "black"}
      width={90}
      height={32}
    >
      <path
        transform="translate(725,283)"
        d="m0 0h49c1.9 5.7 3.47 10.6 4.61 16.4 0.14 0.68 0.27 1.36 0.41 2.06 0.44 2.21 0.87 4.42 1.3 6.63 0.31 1.56 0.61 3.12 0.92 4.68 0.64 3.25 1.28 6.5 1.91 9.75 0.81 4.15 1.63 8.29 2.45 12.4l1.89 9.63c0.3 1.53 0.6 3.06 0.9 4.58 1.5 7.59 2.93 15.1 3.61 22.8h2c0.18-0.67 0.35-1.34 0.54-2.04 1.76-6.58 3.73-13 5.9-19.5 0.33-0.98 0.65-1.95 0.98-2.95 1.05-3.13 2.09-6.25 3.14-9.38l2.16-6.45c4.04-12 8.09-24.1 12.2-36.1 0.4-1.19 0.81-2.37 1.23-3.6 0.55-1.59 0.55-1.59 1.11-3.21 0.31-0.9 0.62-1.8 0.94-2.74 0.78-2.01 0.78-2.01 1.78-3.01 2.52-0.09 5.01-0.12 7.54-0.1 1.13 0 1.13 0 2.28 0.01 2.41 0 4.83 0.01 7.24 0.03 1.64 0 3.27 0.01 4.9 0.01 4.02 0.01 8.03 0.03 12 0.05 3.97 10.3 7.61 20.7 11 31.2 4.03 12.6 8.16 25.3 12.4 37.8 0.48 1.39 0.96 2.79 1.43 4.19 0.66 1.93 1.33 3.87 1.99 5.8 0.56 1.63 0.56 1.63 1.13 3.3 1 2.85 1 2.85 3.05 5.69 0.12-0.65 0.25-1.29 0.38-1.96 10.5-54.6 10.5-54.6 14.2-73.5 0.24-1.2 0.47-2.4 0.72-3.64 0.31-1.58 0.31-1.58 0.64-3.2 0.26-1.34 0.26-1.34 0.53-2.7 0.49-1.96 0.49-1.96 1.49-2.96 1.57-0.09 3.14-0.12 4.7-0.11h3.04c1.09 0 2.17 0.01 3.3 0.01 1.66 0 1.66 0 3.35 0.01 3.56 0 7.12 0.01 10.7 0.03 2.41 0 4.81 0.01 7.22 0.01 5.9 0.01 11.8 0.03 17.7 0.05-2.02 12.6-2.02 12.6-3.48 18.4-0.27 1.1-0.55 2.21-0.83 3.34l-0.88 3.52c-2.52 10.3-4.9 20.5-7.12 30.9-2.78 12.9-5.72 25.7-8.73 38.5-3.11 13.3-6.14 26.6-9.12 39.9-0.37 1.63-0.74 3.26-1.1 4.89-1.65 7.36-3.3 14.7-4.94 22.1-0.68 3.08-1.37 6.16-2.06 9.23-0.33 1.46-0.65 2.91-0.98 4.36-0.44 2-0.89 4-1.34 6-0.25 1.13-0.5 2.26-0.76 3.42-0.66 2.53-0.66 2.53-1.66 3.53-2.59 0.09-5.16 0.12-7.75 0.1-0.78 0-1.55-0.01-2.35-0.01-2.49 0-4.98-0.01-7.46-0.03-1.68 0-3.37-0.01-5.05-0.01-4.13-0.01-8.26-0.03-12.4-0.05-2.81-6.18-5.4-12.4-7.81-18.8-0.35-0.91-0.7-1.83-1.06-2.77-2.61-6.93-4.98-13.9-7.27-21-2.61-7.92-5.47-15.8-8.36-23.6-3.28-8.88-6.55-17.8-9.69-26.7-0.29-0.82-0.58-1.64-0.88-2.49-1.93-5.52-1.93-5.52-1.93-7.76-3.2 2.61-4.1 5.51-5.43 9.36-0.22 0.64-0.44 1.29-0.67 1.95-0.49 1.41-0.97 2.81-1.45 4.22-1.04 3.04-2.1 6.08-3.16 9.12-0.56 1.62-1.12 3.23-1.68 4.85-3.18 9.17-6.45 18.3-9.73 27.4-0.3 0.81-0.59 1.63-0.89 2.47-5.23 14.6-10.6 29.1-16 43.6h-36c-6-24.4-11.7-48.9-17.2-73.5-1.05-4.66-2.11-9.32-3.16-14-1.68-7.42-3.36-14.8-5.04-22.3-2.43-10.7-4.86-21.4-7.3-32.2-0.42-1.86-0.84-3.73-1.26-5.59-0.59-2.61-1.19-5.21-1.78-7.82-0.18-0.82-0.37-1.64-0.56-2.48-0.92-4.03-1.85-8.05-2.84-12.1-0.18-0.77-0.37-1.54-0.56-2.33-0.35-1.44-0.71-2.87-1.07-4.3-1-4.1-1.19-7.2-1.19-11.5z"
      />
      <path
        transform="translate(189,60)"
        d="m0 0c119 0 119 0 139 19 13.3 13.7 16.4 30.3 16.4 48.7-0.01 0.66-0.01 1.33-0.01 2.01-0.07 18.4-4 33.3-16.9 47-5.44 5-11.6 8.72-18.5 11.3 1.57 4.85 4.36 8.4 7.44 12.4 1.09 1.43 2.19 2.87 3.28 4.32 0.83 1.08 0.83 1.08 1.68 2.19 6.93 9.12 13.6 18.4 20.2 27.8 0.62 0.86 1.24 1.72 1.87 2.61 0.58 0.81 1.15 1.62 1.74 2.46 0.51 0.72 1.02 1.44 1.55 2.19 1.22 2.05 1.7 3.74 2.22 6.05-7.77 0.41-15.5 0.69-23.3 0.88-2.64 0.08-5.28 0.19-7.92 0.33-21.2 1.09-21.2 1.09-27-2.63-3.61-3.62-5.77-7.86-7.84-12.5-1.44-3.11-3.32-5.72-5.3-8.52-1.31-1.96-2.61-3.92-3.92-5.88-0.65-0.98-1.31-1.96-1.98-2.97-0.65-0.98-1.3-1.95-1.97-2.96-0.66-0.94-1.31-1.89-1.98-2.86-1.82-2.9-1.82-2.9-3.12-6.04-1.45-3.6-1.45-3.6-5.7-7.86-10.4-0.5-10.4-0.5-21-1v52h-49v-188zm49 47v46c8.11 0.06 8.11 0.06 16.4 0.12 1.68 0.02 3.36 0.04 5.1 0.06 16.5 0.26 16.5 0.26 30.2-7.8 4.95-6.37 4.64-14 3.78-21.6-0.93-5.42-3.08-9.28-7.52-12.6-9.54-5.34-21.2-4.45-31.7-4.28-5.36 0.06-10.7 0.13-16.2 0.19z"
      />
      <path
        transform="translate(1173,282)"
        d="m0 0c117 0 117 0 139 21.1 13 13.6 16.4 32 16.2 50.3-0.59 17.4-5.55 33.8-18 46.5-5.44 4.75-11.2 9.06-18.4 10.1 2.93 5.37 6.25 10.3 9.88 15.2 5.44 7.47 10.8 15 16.1 22.6 2.69 3.86 5.39 7.71 8.16 11.5 0.47 0.66 0.94 1.31 1.42 1.98 0.87 1.2 1.75 2.39 2.63 3.58 2.84 3.92 2.84 3.92 2.84 6.14-7.81 0.31-15.6 0.51-23.4 0.66-2.66 0.05-5.31 0.14-7.97 0.25-23.2 0.88-23.2 0.88-28.1-3.16-2.39-3.13-3.92-6.16-5.53-9.75-1.48-2.25-2.98-4.46-4.54-6.66-0.75-1.13-1.51-2.27-2.26-3.41-0.37-0.56-0.75-1.13-1.13-1.71-0.37-0.57-0.75-1.14-1.13-1.72-0.76-1.14-1.52-2.29-2.28-3.43-0.37-0.57-0.74-1.13-1.13-1.72-0.75-1.12-1.51-2.25-2.28-3.37-1.87-2.75-3.46-5.43-4.89-8.46-1.78-3.89-1.78-3.89-6.36-8.52-9.9-0.5-9.9-0.5-20-1l-1 52h-48v-189zm48 47v47c4.85 0.04 9.69 0.08 14.7 0.12 1.5 0.02 3 0.04 4.54 0.06 16.5 0.53 16.5 0.53 30.8-6.18 5.98-6.31 6.51-13.1 6.38-21.4-0.71-6.66-3.18-11.5-8.07-16-9.96-4.51-20.7-3.74-31.4-3.62-5.57 0.04-11.1 0.08-16.9 0.12z"
      />
      <path
        transform="translate(334 298)"
        d="m0 0c2.53 2.32 4.99 4.7 7.43 7.11 0.75 0.72 1.49 1.44 2.26 2.18 10 10.4 15.3 24 18.7 37.8l0.97 3.88c6.72 30.2 1.53 63.9-15 90.1-13.7 19.1-32.2 30.2-55.1 34.4-23.4 3.64-48.9 0.7-68.7-13.4-4.35-3.41-8.46-6.97-12.2-11-0.6-0.62-1.2-1.24-1.83-1.88-19.8-21-23.3-48.7-22.6-76.4 0.84-24.8 8.99-46.9 25.4-65.8 0.52-0.61 1.04-1.23 1.57-1.86 28.2-30.8 88.2-32.5 119-5.25zm-84.6 42.1c-10.6 16-13.1 34.4-9.47 53 2.38 11 7.46 20.1 16.5 27 8.99 5.14 18.5 7.81 28.8 5.32 10-3.36 17.8-9.09 23.2-18.3 7.64-17.7 8.99-38.5 2.01-56.6-3.84-8.61-10.2-17-19-20.7-15.1-5.16-31.3-2.43-42 10.3z"
      />
      <path
        transform="translate(718 59.9)"
        d="m0 0c0.94-0 1.88-0.01 2.84-0.01 1.02 0 2.04 0 3.09 0.01 1.56-0 1.56-0 3.15-0.01 2.2 0 4.41 0 6.61 0.01 3.38 0 6.77-0 10.2-0.01 2.14 0 4.27 0 6.4 0.01 1.02-0.01 2.04-0.01 3.09-0.01 1.41 0.01 1.41 0.01 2.85 0.01h2.51c1.9 0.13 1.9 0.13 2.9 1.13 0.12 2.18 0.18 4.36 0.2 6.54 0.01 0.68 0.02 1.36 0.03 2.07 0.03 2.27 0.06 4.53 0.08 6.8 0.02 1.57 0.05 3.14 0.07 4.7 0.05 4.14 0.1 8.27 0.15 12.4 0.05 4.21 0.11 8.43 0.16 12.6 0.11 8.27 0.21 16.6 0.31 24.8 1.1-1.57 2.2-3.14 3.3-4.71 0.61-0.88 1.23-1.76 1.86-2.66 2.72-3.9 5.41-7.83 8.09-11.8 1.14-1.67 2.28-3.34 3.42-5.01 0.57-0.82 1.13-1.64 1.71-2.49 6.62-9.69 13.3-19.4 20-29 0.59-0.84 1.17-1.68 1.77-2.55 0.56-0.8 1.12-1.6 1.69-2.42 0.74-1.06 0.74-1.06 1.49-2.14 0.55-0.74 1.11-1.49 1.68-2.26 0.61-1.07 1.23-2.14 1.86-3.24 1.9-2.23 2.94-2.72 5.86-3.28 3.57-0.18 7.1-0.15 10.7-0.07 1.3 0.01 2.61 0.02 3.95 0.03 3.45 0.02 6.9 0.08 10.4 0.15 3.53 0.06 7.05 0.09 10.6 0.12 6.91 0.06 13.8 0.16 20.7 0.29-0.86 4.18-3 6.86-5.63 10.1-0.92 1.18-1.84 2.35-2.76 3.53-0.68 0.86-0.68 0.86-1.37 1.74-2.9 3.76-5.55 7.7-8.24 11.6-7.94 11.4-16.1 22.6-24.3 33.8-2.03 2.74-4.04 5.49-6.05 8.25-5.42 7.42-11 14.7-16.6 22 4.1 6.31 8.45 12.4 13 18.4 5.78 7.66 11.5 15.4 17.2 23.1 4.67 6.37 9.5 12.6 14.4 18.8 6.05 7.62 11.9 15.4 17.6 23.2 0.56 0.77 1.12 1.54 1.7 2.34 0.53 0.72 1.06 1.44 1.6 2.19 1.25 1.67 2.56 3.29 3.88 4.89 1.59 2.07 1.59 2.07 1.59 4.07-7.5 0.15-15 0.3-22.5 0.44-3.48 0.07-6.96 0.14-10.4 0.21-4 0.08-8 0.15-12 0.23-1.25 0.03-2.5 0.05-3.79 0.08-1.16 0.02-2.32 0.04-3.51 0.06-1.54 0.03-1.54 0.03-3.1 0.06-2.47-0.07-4.38-0.2-6.68-1.08-1.88-2.24-3.54-4.42-5.19-6.81l-2.97-4.17c-0.48-0.69-0.97-1.38-1.47-2.09-1.81-2.55-3.68-5.06-5.56-7.56-0.71-0.94-1.42-1.88-2.15-2.85-3.65-4.83-7.31-9.64-11-14.5-0.7-0.91-1.39-1.82-2.11-2.76-4.98-7.59-4.98-7.59-11.6-13.3-0.36 1.06-0.36 1.06-0.72 2.15-1.5 3.33-3.52 5.66-5.84 8.49-6.08 8.16-5.67 16.4-5.5 26.2 0.02 5.67 0.04 11.4 0.06 17.2h-49c-0.02-24.4-0.04-48.7-0.05-73.1-0.01-11.3-0.02-22.6-0.03-33.9-0.01-9.86-0.01-19.7-0.02-29.6 0-5.22 0-10.4-0.01-15.7 0-4.91-0.01-9.82-0.01-14.7v-5.42c-0.01-2.46-0.01-4.91 0-7.37-0.01-0.73-0.01-1.45-0.01-2.2 0.02-5.46 0.09-6.14 5.54-6.15z"
      />
      <path
        transform="translate(1362,283)"
        d="m0 0h133v45c-3.1 1.55-6.36 1.13-9.75 1.11h-2.43c-2.65 0-5.3 0-7.95-0.01-1.84 0-3.67-0.01-5.51-0.01-4.84 0-9.67-0.01-14.5-0.02-4.93-0.01-9.87-0.02-14.8-0.02-9.68-0.01-19.4-0.03-29-0.05v26c20.8 0.33 41.6 0.66 63 1v43h-63l-1 25c2.54-0.01 5.08-0.01 7.7-0.02 8.37-0.01 16.7-0.02 25.1-0.03 5.08-0.01 10.2-0.01 15.2-0.03 4.89-0.01 9.79-0.01 14.7-0.01 1.87-0.01 3.75-0.01 5.62-0.02h7.84c1.17-0.01 1.17-0.01 2.36-0.01 5.35 0.01 5.35 0.01 6.46 1.12v46h-133v-188z"
      />
      <path
        transform="translate(1032,283)"
        d="m0 0c8.05-0.05 16.1-0.08 24.2-0.1 3.74-0.01 7.47-0.03 11.2-0.05 3.6-0.02 7.21-0.03 10.8-0.04 1.38 0 2.76-0.01 4.14-0.02 1.92-0.02 3.85-0.02 5.77-0.02 1.1 0 2.2-0.01 3.33-0.01 2.59 0.24 2.59 0.24 4.59 2.24 0.72 1.95 0.72 1.95 1.4 4.38 0.39 1.37 0.39 1.37 0.78 2.78 0.28 1 0.55 2.01 0.84 3.05 0.29 1.05 0.59 2.1 0.89 3.18 0.64 2.28 1.28 4.56 1.91 6.84 1.34 4.82 2.69 9.64 4.04 14.5 0.69 2.47 1.39 4.93 2.08 7.4 3.03 10.8 6.13 21.7 9.25 32.5 0.78 2.69 1.56 5.39 2.33 8.08 2.53 8.76 5.13 17.5 7.8 26.2 3.94 12.9 7.69 25.8 11.4 38.7 0.96 3.34 1.92 6.68 2.89 10 0.94 3.23 1.87 6.46 2.8 9.7 0.34 1.18 0.69 2.37 1.04 3.59 0.32 1.11 0.64 2.22 0.97 3.36 0.28 0.96 0.55 1.93 0.84 2.92 0.74 2.9 1.23 5.86 1.72 8.81h-51c-4-12-4-12-4-17l-61 1-4 16h-51c0.7-5.6 1.45-10.1 2.99-15.4 0.3-1.04 0.3-1.04 0.61-2.1 0.66-2.28 1.33-4.56 1.99-6.84l1.41-4.86c1.25-4.28 2.49-8.55 3.74-12.8 0.99-3.4 1.98-6.8 2.97-10.2 4.97-17.1 10-34.3 15.2-51.4 3.83-12.7 7.44-25.5 11-38.2 4.36-15.5 9.09-30.9 14.1-46.2zm30 58c-3.69 13-7.15 26.1-10.5 39.2-0.82 3.2-1.65 6.4-2.48 9.6-0.52 2.05-1.05 4.09-1.57 6.14-0.25 0.95-0.49 1.9-0.75 2.88-0.22 0.89-0.45 1.77-0.68 2.68-0.2 0.77-0.39 1.54-0.6 2.34-0.55 2.43-0.55 2.43-0.42 6.14h36c-0.63-5.07-1.24-9.44-2.47-14.3-0.3-1.18-0.6-2.35-0.9-3.56-0.32-1.24-0.64-2.49-0.97-3.77-0.34-1.3-0.67-2.61-1-3.92-0.69-2.72-1.39-5.44-2.09-8.16-0.9-3.49-1.78-6.98-2.67-10.5-0.69-2.69-1.37-5.38-2.06-8.07-0.49-1.92-0.98-3.83-1.47-5.74-0.29-1.16-0.59-2.31-0.9-3.5-0.26-1.02-0.52-2.04-0.79-3.09-0.59-2.41-0.59-2.41-1.68-4.43h-2z"
      />
      <path
        transform="translate(948,60)"
        d="m0 0h62c4.5 12.4 4.5 12.4 5.78 16.8 0.29 1.01 0.58 2.03 0.88 3.07 0.31 1.07 0.61 2.14 0.92 3.24 0.33 1.15 0.66 2.31 1 3.49 0.9 3.12 1.79 6.23 2.68 9.35 0.94 3.31 1.89 6.61 2.84 9.92 1.55 5.42 3.11 10.8 4.66 16.3 2.94 10.2 5.88 20.5 8.84 30.8 0.6 2.09 1.2 4.17 1.8 6.26 3.52 12.2 7.07 24.4 10.7 36.6 0.6 2.01 1.19 4.03 1.79 6.05 0.39 1.33 0.79 2.67 1.18 4 0.19 0.66 0.39 1.31 0.59 1.99 0.95 3.24 1.91 6.48 2.88 9.72 1.07 3.59 2.13 7.18 3.19 10.8 0.32 1.06 0.64 2.12 0.97 3.22 0.29 0.99 0.58 1.99 0.88 3.01 0.26 0.86 0.51 1.71 0.78 2.6 0.83 3.55 1.21 7.19 1.66 10.8h-51l-4-16h-60l-4 16h-52c0.84-4.19 1.86-8.24 3.04-12.3 0.2-0.71 0.41-1.43 0.62-2.16 0.43-1.52 0.87-3.05 1.3-4.57 0.64-2.23 1.28-4.47 1.92-6.71 2.37-8.3 4.83-16.6 7.36-24.8 4.16-13.6 8.1-27.2 12-40.9 1.31-4.53 2.62-9.06 3.93-13.6 0.45-1.53 0.89-3.07 1.33-4.6 0.22-0.76 0.44-1.52 0.67-2.3 1.1-3.79 2.19-7.58 3.29-11.4 0.42-1.47 0.85-2.94 1.27-4.4 0.61-2.09 1.21-4.17 1.81-6.25 2.19-7.58 4.39-15.2 6.59-22.7 0.59-2.03 1.18-4.06 1.76-6.08 0.8-2.78 1.61-5.55 2.42-8.32 0.22-0.79 0.45-1.58 0.69-2.4 0.21-0.74 0.43-1.48 0.65-2.24 0.27-0.94 0.27-0.94 0.55-1.9 1.14-3.48 2.47-6.89 3.76-10.3zm30 59c-1.7 4.91-3.09 9.87-4.43 14.9-0.23 0.85-0.45 1.71-0.69 2.59-0.73 2.74-1.46 5.47-2.19 8.21-0.48 1.78-0.96 3.57-1.44 5.36l-3.54 13.3c-0.72 2.71-1.45 5.42-2.18 8.12-0.46 1.73-0.92 3.46-1.39 5.18-0.21 0.8-0.43 1.6-0.65 2.42-0.82 3.06-1.49 5.76-1.49 8.94h37c-0.62-4.31-1.2-8.15-2.26-12.3-0.38-1.48-0.38-1.48-0.76-2.99-0.27-1.04-0.54-2.09-0.82-3.16-0.28-1.1-0.56-2.2-0.84-3.32-0.9-3.5-1.8-6.99-2.7-10.5-0.59-2.33-1.19-4.66-1.78-7-0.58-2.25-1.16-4.51-1.74-6.77-0.26-1.03-0.53-2.07-0.8-3.14-1.71-6.63-3.48-13.2-5.3-19.8h-2z"
      />
      <path
        transform="translate(149,298)"
        d="m0 0 2 2c-0.36 3.83-1.74 6.75-3.55 10.1-0.51 0.96-1.02 1.92-1.55 2.91-0.55 1.01-1.09 2.02-1.65 3.05-4.17 7.85-8.16 15.6-11.2 23.9-4.83-0.63-8.7-2.67-13-4.81-12.7-6.14-27.2-11.9-41.5-8.62-3.67 1.28-5.32 2.14-7.51 5.43-0.58 2.91-0.58 2.91 0 6 6.27 8.03 16.3 11.6 25.4 15.2 28.8 11.9 28.8 11.9 39.6 21.8 1.17 1.05 1.17 1.05 2.36 2.12 10 9.47 15.1 20.9 15.8 34.7 0.34 17.8-3.01 32.6-15.6 45.8-16 14.6-38.4 18-59.4 17.2-20.7-1.23-47.3-6.3-63.2-20.8-1.08-2.55-1.25-4.28-0.34-6.92 1.06-2.33 2.21-4.6 3.4-6.88 0.63-1.26 0.63-1.26 1.28-2.54 1.35-2.66 2.73-5.32 4.1-7.97l2.76-5.43c2.25-4.43 4.52-8.84 6.8-13.3 3.9 0 6.21 1.73 9.44 3.69 14.8 8.64 32.6 15.6 50 11.8 3.95-1.33 7.19-2.97 9.55-6.46 0-4.42-2.15-6.79-5-10-6.02-4.35-12.8-7.42-19.6-10.3-22-9.35-44.4-20.8-55.1-43.2-5.5-14.2-5.43-31.4 0.66-45.5 2.02-3.65 4.3-6.82 7-10 0.57-0.7 1.15-1.39 1.74-2.11 12.5-13.8 31.2-18.5 49.2-19.8 24-1.13 47 6.26 67.1 18.9z"
      />
      <path
        transform="translate(399,282)"
        d="m0 0h133v47c-7.71 0.13-15.4 0.26-23.1 0.39-3.6 0.06-7.19 0.12-10.8 0.18-16.4 0.28-32.7 0.51-49.1 0.43-0.04 1.1-0.04 1.1-0.08 2.21-0.11 3.37-0.24 6.74-0.36 10.1-0.04 1.15-0.08 2.3-0.12 3.48-0.06 1.71-0.06 1.71-0.12 3.45-0.04 1.03-0.08 2.06-0.11 3.12-0.28 4.89-0.77 9.77-1.21 14.6h64v46c-2.7 1.35-4.8 1.12-7.83 1.11h-3.7c-1.33 0-2.67-0.01-4.01-0.01-1.36 0-2.73-0.01-4.09-0.01-3.6 0-7.19-0.01-10.8-0.02-3.67-0.01-7.34-0.02-11-0.02-7.2-0.01-14.4-0.03-21.6-0.05 0 0.7 0 1.4 0.01 2.12 0.02 6.58 0.03 13.2 0.04 19.7 0.01 3.38 0.01 6.77 0.03 10.2 0.01 3.88 0.01 7.77 0.02 11.6 0 1.22 0.01 2.44 0.01 3.7v3.4c0.01 0.99 0.01 1.98 0.01 3-0.12 2.25-0.12 2.25-1.12 3.25h-48v-189z"
      />
      <path
        transform="translate(164,70)"
        d="m0 0c-1.57 6-4.77 10.8-8.06 15.9-1.18 1.86-2.35 3.73-3.52 5.6-0.58 0.92-1.15 1.84-1.75 2.79-2.37 3.8-4.69 7.63-6.98 11.5-0.57 0.95-0.57 0.95-1.15 1.92-0.85 1.42-1.69 2.85-2.54 4.27-3.27-0.6-6.31-1.39-9.44-2.5-11.8-3.97-24-3.55-35.3 1.79-11 6.22-18.6 15.5-22.7 27.5-4.08 15-2.88 29.1 4.16 42.9 6.06 10.5 14.2 15.6 25.6 19.4 12.1 2.87 23.4 1.09 34.6-4.14l3-2h3c1.8 2.36 1.8 2.36 3.88 5.75 0.78 1.27 1.57 2.54 2.37 3.82 0.43 0.7 0.86 1.4 1.31 2.12 2.73 4.37 5.56 8.68 8.38 13 1.11 1.71 2.22 3.42 3.34 5.13 1.56 2.41 3.13 4.8 4.72 7.18 0.07 2.44 0.07 2.44-1 5-2.38 1.62-4.48 2.81-7.06 4-1.08 0.51-1.08 0.51-2.18 1.04-25.9 12-53.6 12.6-80.7 3.84-21.9-8.25-38-23.8-48.1-44.9-12.2-27.8-12.4-59.1-1.49-87.4 8.63-20.9 25.4-39.5 46.2-48.8 31-12.6 62.2-10.8 91.3 5.19z"
      />
      <path
        transform="translate(566,282)"
        d="m0 0h133v47c-9.56 0.25-9.56 0.25-19.3 0.5-2.01 0.05-4.02 0.1-6.09 0.16-1.59 0.04-3.18 0.08-4.78 0.12-1.24 0.03-1.24 0.03-2.5 0.07-3.11 0.08-6.21 0.15-9.32 0.15v141h-49v-141h-41l-1-1v-47z"
      />
      <path
        transform="translate(461,60)"
        d="m0 0h134c-1 47-1 47-2 48h-40l-1 140h-48c-0.88-3.52-1.12-6.06-1.12-9.64v-3.49c0-1.88 0-1.88 0.01-3.81v-4.02c0-3.64 0-7.27 0.01-10.9 0-3.8 0.01-7.6 0.01-11.4 0-7.2 0.01-14.4 0.02-21.6 0.01-8.19 0.01-16.4 0.02-24.6 0.01-16.8 0.03-33.7 0.05-50.6-1.86 0.01-1.86 0.01-3.75 0.02-4.57 0.01-9.14 0.03-13.7 0.03-1.98 0.01-3.97 0.02-5.95 0.03-2.84 0.01-5.68 0.01-8.52 0.02-1.34 0.01-1.34 0.01-2.71 0.01-2.12 0-4.24-0.05-6.36-0.11l-1-1v-47z"
      />
      <path
        transform="translate(1096 59.9)"
        d="m0 0c0.94-0 1.88-0.01 2.84-0.01 1.02 0 2.04 0 3.09 0.01 1.56-0 1.56-0 3.15-0.01 2.2 0 4.41 0 6.61 0.01 3.38 0 6.77-0 10.2-0.01 2.14 0 4.27 0 6.4 0.01 1.02-0.01 2.04-0.01 3.09-0.01 1.41 0.01 1.41 0.01 2.85 0.01h2.51c1.9 0.13 1.9 0.13 2.9 1.13 0.09 1.82 0.12 3.65 0.12 5.47v3.6c0 1.97 0 1.97-0.01 3.99v4.16c0 3.79 0 7.57-0.01 11.4-0.01 3.95-0.01 7.9-0.01 11.8 0 7.48-0.01 15-0.02 22.4-0.01 8.52-0.02 17-0.02 25.6-0.01 17.5-0.03 35-0.05 52.6 0.68 0 1.37-0.01 2.08-0.01 7.12-0.02 14.2-0.03 21.4-0.05 2.66 0 5.32-0.01 7.98-0.02 3.82-0.01 7.63-0.01 11.4-0.02 1.2 0 2.39-0.01 3.63-0.01h3.34c1.46-0.01 1.46-0.01 2.95-0.01 2.21 0.12 2.21 0.12 3.21 1.12v46h-105c-0.04-47.1-0.04-47.1-0.05-66.8-0.01-13.6-0.01-27.2-0.03-40.8-0.01-9.91-0.01-19.8-0.02-29.7 0-5.25 0-10.5-0.01-15.8 0-4.93-0.01-9.87-0.01-14.8v-5.45c-0.01-2.47-0.01-4.94 0-7.41-0.01-0.73-0.01-1.46-0.01-2.21 0.02-5.48 0.08-6.17 5.54-6.18z"
      />
      <path
        transform="translate(379,60)"
        d="m0 0h48v188h-49c-0.02-24.1-0.04-48.1-0.05-72.2-0.01-11.2-0.01-22.4-0.03-33.5-0.01-9.74-0.01-19.5-0.01-29.2-0.01-5.15-0.01-10.3-0.02-15.5v-14.6c0-1.78-0.01-3.56-0.01-5.35v-7.29c0-0.71-0.01-1.42-0.01-2.15 0.01-3.03 0.16-5.33 1.13-8.23z"
      />
      <path
        transform="translate(629,60)"
        d="m0 0h48c1 1 1 1 1.11 4.04-0.01 1.4-0.01 2.79-0.03 4.18 0 0.76 0 1.53-0.01 2.32-0.01 2.58-0.03 5.16-0.05 7.74-0.01 1.84-0.02 3.68-0.03 5.53-0.02 5.02-0.06 10-0.09 15-0.03 5.24-0.06 10.5-0.09 15.7-0.06 9.92-0.12 19.8-0.18 29.8-0.08 11.3-0.14 22.6-0.21 33.9-0.13 23.2-0.27 46.5-0.42 69.8h-48v-188z"
      />
      <path
        transform="translate(1533 427)"
        d="m0 0c0.85 0 1.7 0 2.58 0.01h2.91c1.57 0 1.57 0 3.17 0.01 1.06 0 2.12 0.01 3.22 0.01 3.41 0 6.83 0.02 10.2 0.03 2.31 0 4.62 0.01 6.92 0.01 5.68 0.01 11.4 0.03 17 0.05v44l-20.5 0.06c-2.32 0-4.64 0.01-6.96 0.02-3.33 0.01-6.66 0.01-9.98 0.02-1.57 0.01-1.57 0.01-3.17 0.01h-2.91c-0.85 0.01-1.7 0.01-2.58 0.01-1.94-0.12-1.94-0.12-2.94-1.12-0.1-3.09-0.14-6.16-0.14-9.25v-2.81c0-1.97 0-3.94 0.01-5.9 0-3.03 0-6.05-0.01-9.07v-5.72-2.76c0.03-7.42 0.03-7.42 3.08-7.61z"
      />
    </svg>
  );
};

export default Logo;
