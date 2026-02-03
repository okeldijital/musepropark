import type { CollectionConfig } from "payload";

export const GearCategories: CollectionConfig = {
  slug: "gear-categories",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};
