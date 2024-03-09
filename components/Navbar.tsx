'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'
import { useMediaQuery } from 'react-responsive'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'

export function NavigationMenuDemo() {
  const mdDown = useMediaQuery({ maxWidth: 750 })
  return (
    <>
      {mdDown ? (
        <Sheet>
          <SheetTrigger className="m-3 flex flex-row-reverse" asChild>
            <Button variant="outline">
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[80%]">
            <SheetHeader>
              <h4 className='text-xl font-semibold tracking-tight"'>Menu</h4>
            </SheetHeader>
            <NavigationMenu className="w-full mb-10 mt-3">
              <NavigationMenuList className="flex flex-col gap-3 w-full">
                <NavigationMenuItem className="w-full">
                  <Link href="/campeonatos" legacyBehavior passHref>
                    <Button className="w-full" variant="default">
                      Campeonatos
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/horarios" legacyBehavior passHref>
                    <Button className="w-full" variant="default">
                      Horários
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/loja" legacyBehavior passHref>
                    <Button className="w-full" variant="default">
                      Loja
                    </Button>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="w-full">
                  <Link href="/lanchonete" legacyBehavior passHref>
                    <Button className="w-full" variant="default">
                      Lanchonete
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <SheetFooter>
              <SheetClose>
                <Button variant="outline">Fechar</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ) : (
        <div className="flex justify-center pb-4">
          <NavigationMenu>
            <NavigationMenuList>
              <div className="flex  items-center justify-between gap-20">
                <div
                  className={`flex ${mdDown ? 'flex-col' : 'flex-row'} items-center justify-between gap-3`}
                >
                  <NavigationMenuItem className="w-full">
                    <Link href="/campeonatos" legacyBehavior passHref>
                      <NavigationMenuLink>
                        <div className="w-full">
                          <Button className="w-full" variant="secondary">
                            Campeonatos
                          </Button>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <Link href="/horarios" legacyBehavior passHref>
                      <NavigationMenuLink>
                        <Button className="w-full" variant="secondary">
                          Horários
                        </Button>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <Link href="/loja" legacyBehavior passHref>
                      <NavigationMenuLink>
                        <Button className="w-full" variant="secondary">
                          Loja
                        </Button>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="w-full">
                    <Link href="/lanchonete" legacyBehavior passHref>
                      <NavigationMenuLink>
                        <Button className="w-full" variant="secondary">
                          Lanchonete
                        </Button>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>

                <div className="flex gap-3">
                  <ModeToggle />
                  <NavigationMenuItem className="flex items-center">
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
        </div>
      )}
    </>
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
