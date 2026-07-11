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

  return (
    <div>
      <Dropdown>
        <Dropdown.Trigger className="rounded-full">
          <Avatar>
            {/* ✅ Fixed: fall back to undefined if image is null */}
            <Avatar.Image alt={user?.name} src={user?.image || undefined} />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
          </Avatar>
        </Dropdown.Trigger>
        <Dropdown.Popover>
          <div className="px-3 pt-3 pb-1">
            <div className="flex items-center gap-2">
              <Avatar size="sm">
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
              textValue="My Bookings"
              onClick={() => router.push('/my-bookings')}
            >
              <Label>My Bookings</Label>
            </Dropdown.Item>
            <Dropdown.Item
              id="profile"
              textValue="Add Facility"
              onClick={() => router.push('/add-facility')}
            >
              Add Facility
            </Dropdown.Item>
            <Dropdown.Item
              id="settings"
              textValue="Manage Facilities"
              onClick={() => router.push('/manage-facility')}
            >
              <div className="flex w-full items-center justify-between gap-2">
                Manage Facilities
                <Gear className="size-3.5 text-slate-400" />
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              id="logout"
              textValue="Logout"
              variant="danger"
              onClick={() => authClient.signOut()}
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