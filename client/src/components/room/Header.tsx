import { Avatar, Badge, Button, Card, CardBody } from "@nextui-org/react";
import React from "react";
import Dropdown from "./Dropdown";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDownIcon, UsersIcon } from "@heroicons/react/16/solid";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import getToken from "~/hooks/getToken";

const Header = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const token = getToken(pathname);
  const username = params.get("username");
  return (
    <div className="">
      <Card className="flex items-center justify-between rounded-full px-2">
        <CardBody className="">
          <div className="flex items-center justify-between gap-5">
            <p className="truncate text-sm">{token}</p>
            <div className="flex items-center gap-2">
              <ClipboardIcon className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="flex items-center justify-between gap-5 py-5">
        <div className="flex flex-wrap items-center gap-1">
          <Badge color="danger" content="3+" shape="circle">
            <Button
              isIconOnly
              aria-label="more than 99 notifications"
              radius="full"
              variant="light"
              disabled
            >
              <UsersIcon className="h-6 w-6" />
            </Button>
          </Badge>
          <p className="hidden text-sm text-gray-400 sm:block">Users in chat</p>
        </div>
        <div className="flex items-center gap-1 rounded-full">
          <Dropdown>
            <div className="flex cursor-pointer items-center gap-5">
              <div className="flex items-center gap-5">
                <Avatar showFallback src="https://images.unsplash.com/broken" />
                <div>
                  <h1 className="text-sm">Username</h1>
                  <p className="truncate text-xs text-gray-400">@{username}</p>
                </div>
              </div>
              <ChevronDownIcon className="h-6 w-6" />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
