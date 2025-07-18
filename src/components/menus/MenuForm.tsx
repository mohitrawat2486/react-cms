import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import SelectInput from "@/components/ui/SelectInput";
import { useNavigate } from '@tanstack/react-router'; // ✅ correct hook

type Option = {
  label: string;
  value: string | number;
};

type MenuData = {
  title: string;
  url: string;
  parentId: string | number | null;
  position: string;
  icon: string;
  sortOrder: number;
  status: string;
  pageId: string | number | null;
};

export default function MenuForm({
  menuData,
  onChange,
  onSubmit,
  parentOptions,
  pageOptions,
  initialData,
}: {
  menuData: MenuData;
  onChange: (key: string, value: any) => void;
  onSubmit: () => void;
  parentOptions: Option[];
  pageOptions: Option[];
  initialData?: MenuData;
}) {
  const navigate = useNavigate(); // ✅ correct usage

  const handleCancel = () => {
    navigate({ to: "/menus" }); // ✅ TanStack navigation
  };

  return (
    <form
      className="space-y-6 px-6 py-4 w-full bg-white rounded shadow border border-gray-200"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2 className="text-lg font-semibold mb-4">
        {initialData ? "Edit Menu" : "Add Menu"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Title"
          name="title"
          value={menuData.title}
          onChange={(e) => onChange("title", e.target.value)}
          className="w-full"
        />

        <Input
          label="URL / Slug"
          name="url"
          value={menuData.url}
          onChange={(e) => onChange("url", e.target.value)}
          className="w-full"
        />

        <SelectInput
          label="Parent Menu"
          name="parentId"
          value={menuData.parentId ?? ""}
          onChange={(val) => onChange("parentId", val)}
          options={[{ label: "None", value: "" }, ...parentOptions]}
          className="w-full"
        />

        <SelectInput
          label="Position"
          name="position"
          value={menuData.position}
          onChange={(val) => onChange("position", val)}
          options={[
            { label: "Navbar", value: "navbar" },
            { label: "Footer", value: "footer" },
          ]}
          className="w-full"
        />

        <Input
          label="Sort Order"
          name="sortOrder"
          type="number"
          value={menuData.sortOrder}
          onChange={(e) => onChange("sortOrder", Number(e.target.value))}
          className="w-full"
        />

        <SelectInput
        label="Link to Page"
        name="pageId"
        value={menuData.pageId ?? ""}
        onChange={(val) => onChange("pageId", val)}
        options={[{ label: "None", value: "" }, ...pageOptions]}
        className="w-full"
      />

        <SelectInput
          label="Status"
          name="status"
          value={menuData.status}
          onChange={(val) => onChange("status", val)}
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
          className="w-full"
        />
      </div>

      <div className="pt-4 flex justify-end gap-3">
        <Button
          type="button"
          className="bg-gray-500 hover:bg-gray-600"
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button type="submit">
          {initialData ? "Update" : "Add"} Menu
        </Button>
      </div>
    </form>
  );
}
