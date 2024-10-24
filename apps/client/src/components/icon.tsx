import { useTheme } from "@reactive-resume/hooks";
import { cn } from "@reactive-resume/utils";

type Props = {
  size?: number;
  className?: string;
};

export const Icon = ({ size = 32, className }: Props) => {
  const { isDarkMode } = useTheme();

  let src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  switch (isDarkMode) {
    case false: {
      src = "/icon/dark.svg";
      break;
    }
    case true: {
      src = "/icon/light.svg";
      break;
    }
  }

  return (
    // <img
    //   src={src}
    //   width={size}
    //   height={size}
    //   alt="Refobe Resume"
    //   className={cn("rounded-sm", className)}
    // />
    <div className="flex items-center">
    <h1 className="text-4xl font-bold">
      <span className="text-blue-500 dark:text-yellow-400">R</span><span className="text-neutral-900 dark:text-neutral-100">efobe</span>
    </h1>
  </div>
  );
};
