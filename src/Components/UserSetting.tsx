"use client";
import { ArrowRightFromSquare, Gear } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { useRouter } from "next/navigation";
import React from 'react';

const UserSetting = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  const handleSignout=()=>{
    authClient.signOut(); 
    router.push('/login');
  }

  return (
    <div className="shadow-orange-200 shadow-lg">
      <Dropdown className="">
        <Dropdown.Trigger className="rounded-full">
          <Avatar className="rounded-full">
            {/* ✅ Fixed: fall back to undefined if image is null */}
            <Avatar.Image className="rounded-full" alt={user?.name} src={user?.image || undefined} />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Avatar size="sm" className="">
                {/* ✅ Fixed: fall back to undefined if image is null */}
                <Avatar.Image alt={user?.name} src={user?.image || undefined} />
                <Avatar.Fallback>{user?.name?.charAt(0) || "U"}</Avatar.Fallback>
              </Avatar>
              <div className="flex flex-col gap-0">
                <p className="text-sm leading-5 font-medium">{user?.name}</p>
                <p className="text-xs leading-none text-slate-400">{user?.email}</p>
              </div>
            </div>
          </div>
          <Dropdown.Menu>
            <Dropdown.Item
              id="dashboard"
              textValue="My Cart"
              onClick={() => router.push('/cart')}
            >
              <Label>My Cart</Label>
            </Dropdown.Item>
            <Dropdown.Item
              id="profile"
              textValue="Add Product"
              onClick={() => router.push('/add-product')}
            >
              Add Product
            </Dropdown.Item>
            <Dropdown.Item
              id="settings"
              textValue="Manage Product"
              onClick={() => router.push('/manage')}
            >
              <div className="flex w-full items-center justify-between gap-2">
                Manage Products
                <Gear className="size-3.5 text-slate-400" />
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              id="logout"
              textValue="Logout"
              variant="danger"
              onClick={handleSignout}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <Label>Log Out</Label>
                <ArrowRightFromSquare className="size-3.5 text-red-500" />
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default UserSetting;