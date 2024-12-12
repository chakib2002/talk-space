import { DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Dropdown as MainDropdown } from "@nextui-org/react";

export default function Dropdown({ children }: { children: JSX.Element }) {
  return (
    <MainDropdown>
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit">Edit username</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Leave room
        </DropdownItem>
      </DropdownMenu>
    </MainDropdown>
  );
}
