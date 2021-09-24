// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ЛоготипIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 125 28"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.334 0h5.333l-.762 5.333h5.334L20.001 0h5.333l-.761 5.333h6.095l-1.222 5.334H23.81l-.953 6.666h6.477l-1.223 5.334h-6.016L21.334 28h-5.333l.762-5.333h-5.334L10.667 28H5.334l.762-5.333H0l1.222-5.334h5.635l.953-6.666H1.333l1.223-5.334h6.016L9.334 0zm8.19 17.333l.953-6.666h-5.334l-.952 6.666h5.334z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M79.793 23.063c5.371 0 8.07-2.674 8.07-5.842 0-4.067-3.884-4.841-6.706-5.404-1.61-.322-2.874-.574-2.874-1.33 0-.593.544-1.089 2.252-1.089 1.51 0 3.12.421 4.827 1.288l1.758-4.233c-1.807-1.015-4.208-1.51-6.535-1.51-5.372 0-8.07 2.624-8.07 5.842 0 4.087 3.834 4.885 6.651 5.471 1.636.341 2.929.61 2.929 1.41 0 .594-.594.941-2.253.941-1.906 0-4.085-.619-5.718-1.584l-1.882 4.257c1.733 1.065 4.654 1.783 7.55 1.783z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M53.599 9.869c0 1.609-.817 2.946-2.401 3.738 2.03.742 3.218 2.228 3.218 4.282 0 3.02-2.55 4.778-7.328 4.778h-9.753V5.339h9.258c4.778 0 7.006 1.906 7.006 4.53zm-5.892.841c0-.841-.594-1.287-1.906-1.287h-2.723v2.575h2.723c1.312 0 1.906-.446 1.906-1.288zm-4.629 7.872h3.515c1.287 0 1.931-.47 1.931-1.361s-.644-1.362-1.93-1.362h-3.516v2.723z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M67.308 5.339h5.644l-6.535 11.04v6.288h-5.842v-6.362L54.039 5.339h6.164l3.54 5.99 3.565-5.99z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M108.465 14.003c0 5.248-4.134 9.06-9.779 9.06-5.644 0-9.778-3.812-9.778-9.06 0-5.248 4.134-9.06 9.778-9.06 5.645 0 9.779 3.812 9.779 9.06zm-13.665 0c0 2.698 1.733 4.332 3.886 4.332 2.154 0 3.887-1.634 3.887-4.332S100.84 9.67 98.686 9.67c-2.153 0-3.886 1.634-3.886 4.332z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M110.585 22.667h13.665v-4.53h-7.823V5.339h-5.842v17.328z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ЛоготипIcon;
/* prettier-ignore-end */
