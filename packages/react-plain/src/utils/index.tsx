/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

import * as React from 'react';

export interface IIconContent {
  elem: string;
  attrs?: Record<string, unknown>;
  content?: IIconContent[];
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Width and height of the icon. A number is interpreted as px. Defaults to `1em`. */
  size?: number | string;
  /** Accessible name. When set, the icon is exposed to assistive technology. */
  title?: string;
}

export type IconComponent = React.NamedExoticComponent<Omit<IconProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;

const createElements = (id: string, content: IIconContent[]): React.ReactNode[] => {
  return content.map((item: IIconContent, index: number) => {
    const key = `${id}-${index}`;
    const children = item.content ? createElements(key, item.content) : undefined;
    return React.createElement(item.elem, { ...item.attrs, key }, children);
  });
};

const createSvgIcon = (displayName: string, viewBox: string, content: IIconContent[]): IconComponent => {
  const children = createElements(displayName, content);
  const Component = React.memo(
    React.forwardRef<SVGSVGElement, IconProps>(({ size = '1em', title, ...props }, ref) => {
      // Without a title the icon is decorative and hidden from assistive technology.
      const a11yProps = title ? { role: 'img' } : { 'aria-hidden': true, focusable: false };
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          fill="currentColor"
          width={size}
          height={size}
          {...a11yProps}
          {...props}
          ref={ref}
        >
          {title ? <title>{title}</title> : null}
          {children}
        </svg>
      );
    }),
  );
  Component.displayName = displayName;
  return Component;
};

export {
  createSvgIcon,
};
