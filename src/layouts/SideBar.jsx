import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button.jsx";
import { Bell } from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import { Info } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { Home } from 'lucide-react';
import { Euro  } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE,HOME_ROUTE2 } from "../router/index.jsx";
import { VscFiles } from "react-icons/vsc";
import { GrScan } from "react-icons/gr";
import { HiOutlineTemplate } from "react-icons/hi";


export function SideBar({ className }) {
  const navigate = useNavigate();

  return (
    <div className={cn("pb-12", className)}>
      <div className="flex flex-col  h-full w-64 bg-gray-200">
        <div className="px-3 py-3">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Menu 
          </h2>
          <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate(HOME_ROUTE2)}>
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/Templates')}>
              <HiOutlineTemplate  className="mr-2 h-4 w-4" /> Services
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate(HOME_ROUTE)}>
              <VscFiles  className="mr-2 h-4 w-4" /> Documents
            </Button>         
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/Clients_Module_Folders')}>
              <GrScan  className="mr-2 h-4 w-4" /> Create Parsers
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/Billing')}>
              <Euro  className="mr-2 h-4 w-4" />  Billing
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/Notifications')}>
              <Bell className="mr-2 h-4 w-4" /> Notifications
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Need Help ? 
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/help-center')}>
              <HelpCircle className="mr-2 h-4 w-4" /> Help Center
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/about')}>
              <Info className="mr-2 h-4 w-4" /> About
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/contact')}>
              <MessageCircle className="mr-2 h-4 w-4" /> Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
