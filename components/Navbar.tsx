'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className="flex flex-row items-center justify-between gap-20">
          <div
            id="divvv"
            className="flex flex-row items-center justify-between gap-3"
          >
            <Avatar>
              <AvatarImage
                src="/logo.png"
                alt="logo"
                width="100px"
                height="100px"
              />
            </Avatar>
            <NavigationMenuItem>
              <Link href="/campeonatos" legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button variant="secondary">Campeonatos</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/horarios" legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button variant="secondary">Horários</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/loja" legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button variant="secondary">Loja</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/lanchonete" legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button variant="secondary">Lanchonete</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>

          <div className="flex flex-row gap-2">
            <ModeToggle />
            <NavigationMenuItem>
              <Link href="/login" legacyBehavior passHref>
                <NavigationMenuLink>
                  <Button variant="default">Login</Button>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
