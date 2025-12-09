import classNames from "classnames";
import { ReactNode } from "react";

const BottomSheet = ({
  open,
  close,
  children,
}: {
  open: boolean;
  close: () => void;
  children: ReactNode;
}) => {
  if (!open) return null;
  return (
    <div
      role="button"
      onClick={close}
      className="w-screen transition-all duration-500 ease-in-out h-screen fixed bottom-0 left-0 z-50 bg-black/50 backdrop-blur-sm"
    >
      <div
        className={classNames(
          "z-100 bg-base-100 p-4 rounded-t-xl pointer-events-none",
          {
            "-translate-y-full": open,
            "translate-y-0": !open,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
