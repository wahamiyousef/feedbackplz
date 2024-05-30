import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
export const navItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  { name: 'Billing', href: '/dashboard/billing', icon: CreditCard }
]
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { CreditCard, DoorClosed, Gem, Home, Settings } from "lucide-react"

export function UserNav({ name, email, image }: { name: string, email: string, image: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src={image} alt="" />
            <AvatarFallback className="text-xl">{name[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <div className="flex flex-row">
              <p className="text-sm font-medium">{name}</p>
              {/*
              <span className="w-auto ml-2 px-3 py-1 rounded-full bg-secondary flex">
                <Gem className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium leading-none text-primary ml-1">PRO</span>
              </span>
              */}
            </div>
            <p className="text-xs leading-none text-muted-foreground">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Link href={item.href} className="w-full flex justify-between items-center">
                {item.name}
                <span><item.icon className="w-4 h-4" /></span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full flex justify-between items-center" asChild>
          <LogoutLink>
            Logout{" "}
            <span>
              <DoorClosed className="w-4 h-4" />
            </span>
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}