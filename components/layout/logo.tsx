import * as React from "react";
import Link from "next/link";
import { AppIcon } from "../svg/app-icon";

interface Props extends Omit<React.ComponentProps<typeof Link>, "href"> {
  href?: string;
  className?: string;
}

export default function Logo(props: Props) {
  return (
    <Link href="/" {...props}>
      <AppIcon className="!size-7" gradient="brand" />
      <p className="text-base font-semibold">OmniTrend</p>
    </Link>
  );
}
