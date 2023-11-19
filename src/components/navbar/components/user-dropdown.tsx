// ***** Library Imports *****
import { Power } from "lucide-react";

// ***** Local Imports *****
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar/avatar";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("apollo-token");
    return navigate("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-10 h-10">
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2">
        <DropdownMenuItem className="flex items-center gap-4">
          <div className="flex flex-col">
            <h4 className="font-bold">Admin</h4>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="py-3 flex items-center gap-2 cursor-pointer"
          // onClick={signOut}
        >
          <Power className="w-5 h-5" />
          <span className="text-semibold" onClick={handleLogout}>
            Sign out
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
