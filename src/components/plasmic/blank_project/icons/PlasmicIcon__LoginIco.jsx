// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LoginIcoIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.2 9.037a.443.443 0 01.122.205.472.472 0 010 .226.367.367 0 01-.123.198.418.418 0 01-.136.089.424.424 0 01-.165.034.456.456 0 01-.314-.123L0 7.014 2.584 4.36a.432.432 0 01.314-.136.39.39 0 01.301.136.298.298 0 01.082.09.45.45 0 010 .43.271.271 0 01-.082.096L1.627 6.562h8.422c.118 0 .22.042.307.124.087.082.13.184.13.307a.428.428 0 01-.13.315.42.42 0 01-.307.13h-8.45l1.6 1.6zM13.124 0H5.25a.873.873 0 00-.875.875v3.938h.889V1.408a.532.532 0 01.52-.533h6.794c.146 0 .271.052.376.157.105.105.157.23.157.376l.014 11.184a.513.513 0 01-.157.376.513.513 0 01-.376.157H5.783a.491.491 0 01-.369-.157.525.525 0 01-.15-.376V9.174h-.889v3.951c0 .246.087.454.26.622A.852.852 0 005.25 14h7.875a.846.846 0 00.622-.253.846.846 0 00.253-.622V.875c0-.355-.16-.615-.479-.78A.876.876 0 0013.125 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LoginIcoIcon;
/* prettier-ignore-end */
