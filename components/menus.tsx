"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export interface NavigationMenuProps {
  menus: {
    id: string;
    label: string;
    destination: string;
    subMenuItems:
      | {
          id: string;
          label: string;
          destination: string;
        }[]
      | [];
  }[];
  classNames?: string;
  ctaprops?: {
    destination: {
      id: string;
      uri: string;
      __typename: string;
    };
    label: string;
  };
  siteLogo?: {
    __typename: string;
    id: string;
    altText: string;
    sourceUrl: string;
  };
}

export default function NavigationMenus({
  menus,
  classNames,
}: NavigationMenuProps) {
  return (
    <NavigationMenu className={classNames}>
      <NavigationMenuList className="block lg:flex z-10">
        {menus.map((item) => {
          if (item.subMenuItems.length > 0) {
            return (
              <NavigationMenuItem className="z-10" key={item.id}>
                <NavigationMenuTrigger>
                  <Link href={item.destination} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="z-20 bg-white">
                  <ul className="grid w-full gap-3 p-4 md:w-[350px] md:grid-cols-2 lg:w-[350px] ">
                    {item.subMenuItems.map((submenu) => (
                      <ListItem
                        key={submenu.id}
                        title={submenu.label}
                        href={submenu.destination}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={item.id}>
                <Link href={item.destination} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none text-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          href={props.href!}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
