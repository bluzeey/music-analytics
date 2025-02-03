/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-expressions */
// import { Badge } from "../src/components/Badge";
import { Button } from "../src/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../src/components/Dialog";
import { DropdownMenuItem } from "../src/components/Dropdown";
import { Input } from "../src/components/Input";
import { Label } from "../src/components/Label";
// import { RadioCardGroup, RadioCardItem } from "../src/components/RadioCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/Select";

export const databases: {
  label: string;
  value: string;
  description: string;
  isRecommended: boolean;
}[] = [
  {
    label: "Base performance",
    value: "base-performance",
    description: "1/8 vCPU, 1 GB RAM",
    isRecommended: true,
  },
  {
    label: "Advanced performance",
    value: "advanced-performance",
    description: "1/4 vCPU, 2 GB RAM",
    isRecommended: false,
  },
  {
    label: "Turbo performance",
    value: "turbo-performance",
    description: "1/2 vCPU, 4 GB RAM",
    isRecommended: false,
  },
];

export type ModalProps = {
  itemName: string;
  onSelect: () => void;
  onOpenChange: (open: boolean) => void;
};

export function ModalAddWorkspace({
  itemName,
  onSelect,
  onOpenChange,
}: ModalProps) {
  return (
    <>
      <Dialog onOpenChange={onOpenChange}>
        <DialogTrigger className="w-full text-left">
          <DropdownMenuItem
            onSelect={(event) => {
              event.preventDefault();
              onSelect && onSelect();
            }}
          >
            {itemName}
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <form>
            <DialogHeader>
              <DialogTitle>Add new workspace</DialogTitle>
              <DialogDescription className="mt-1 text-sm leading-6">
                With free plan, you can add up to 10 workspaces.
              </DialogDescription>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="workspace-name" className="font-medium">
                    Workspace name
                  </Label>
                  <Input
                    id="workspace-name"
                    name="workspace-name"
                    placeholder="my_workspace"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="starter-kit" className="font-medium">
                    Starter kit
                  </Label>
                  <Select defaultValue="empty-workspace">
                    <SelectTrigger
                      id="starter-kit"
                      name="starter-kit"
                      className="mt-2"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="empty-workspace">
                        None - Empty workspace
                      </SelectItem>
                      <SelectItem value="commerce-analytics">
                        Commerce analytics
                      </SelectItem>
                      <SelectItem value="product-analytics">
                        Product analytics
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button
                  className="mt-2 w-full sm:mt-0 sm:w-fit"
                  variant="secondary"
                >
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  type="submit"
                  className="w-full sm:w-fit"
                  disabled={true}
                >
                  Add workspace
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
