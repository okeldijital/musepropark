import type { CollectionConfig } from "payload";

export const Articles: CollectionConfig = {
  slug: "articles",
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
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
    },
    {
      name: "featureImage",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "articleType",
      type: "select",
      required: true,
      options: ["feature", "interview", "story"],
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: ["draft", "review", "published"],
    },
    {
      name: "publishedAt",
      type: "date",
    },
  ],
};
