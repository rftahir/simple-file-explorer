import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.fileFolders.upsert({
    where: { id: "32acdf74-3106-48df-a05e-1658252f0fd3" },
    update: {},
    create: {
      id: "32acdf74-3106-48df-a05e-1658252f0fd3",
      title: "Folder A",
      parentId: null,
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "28b6b658-8101-48ad-9829-941f18f8daee" },
    update: {},
    create: {
      id: "28b6b658-8101-48ad-9829-941f18f8daee",
      title: "Folder B",
      parentId: null,
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "aebd426c-6140-464a-b286-a49fb86ffe85" },
    update: {},
    create: {
      id: "aebd426c-6140-464a-b286-a49fb86ffe85",
      title: "Folder C",
      parentId: null,
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "5dcfbedc-db10-4df0-a7f3-1b60b4282036" },
    update: {},
    create: {
      id: "5dcfbedc-db10-4df0-a7f3-1b60b4282036",
      title: "Folder A1",
      parentId: "32acdf74-3106-48df-a05e-1658252f0fd3",
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8" },
    update: {},
    create: {
      id: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8",
      title: "Folder A2",
      parentId: "32acdf74-3106-48df-a05e-1658252f0fd3",
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "f4b68d30-fe39-4295-a431-ece671be7935" },
    update: {},
    create: {
      id: "f4b68d30-fe39-4295-a431-ece671be7935",
      title: "Folder A3",
      parentId: "32acdf74-3106-48df-a05e-1658252f0fd3",
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "251a3b7a-948d-4b55-b319-e19f925a3411" },
    update: {},
    create: {
      id: "251a3b7a-948d-4b55-b319-e19f925a3411",
      title: "File A1",
      parentId: "32acdf74-3106-48df-a05e-1658252f0fd3",
      type: "file",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "c50e2468-cf40-45d8-9339-46d34fa58aa2" },
    update: {},
    create: {
      id: "c50e2468-cf40-45d8-9339-46d34fa58aa2",
      title: "File A2",
      parentId: "32acdf74-3106-48df-a05e-1658252f0fd3",
      type: "file",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "f4899d02-a988-4cad-ad9b-05c9322d591a" },
    update: {},
    create: {
      id: "f4899d02-a988-4cad-ad9b-05c9322d591a",
      title: "File A3",
      parentId: "32acdf74-3106-48df-a05e-1658252f0fd3",
      type: "file",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "d08f1c39-31f1-4f27-8bcf-f77522fc5b57" },
    update: {},
    create: {
      id: "d08f1c39-31f1-4f27-8bcf-f77522fc5b57",
      title: "Folder A1-1",
      parentId: "5dcfbedc-db10-4df0-a7f3-1b60b4282036", // Parent: Folder A1
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "40c2378c-b6f7-47cb-80c2-c90b3944f062" },
    update: {},
    create: {
      id: "40c2378c-b6f7-47cb-80c2-c90b3944f062",
      title: "Folder A1-2",
      parentId: "5dcfbedc-db10-4df0-a7f3-1b60b4282036", // Parent: Folder A1
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "0b45d479-51f2-4f34-bfea-27fe72ad11c9" },
    update: {},
    create: {
      id: "0b45d479-51f2-4f34-bfea-27fe72ad11c9",
      title: "Folder A1-3",
      parentId: "5dcfbedc-db10-4df0-a7f3-1b60b4282036", // Parent: Folder A1
      type: "folder",
    },
  });

  // Files under Folder A1
  await prisma.fileFolders.upsert({
    where: { id: "3ddf7d4a-197b-465d-bbe4-cd82351978c3" },
    update: {},
    create: {
      id: "3ddf7d4a-197b-465d-bbe4-cd82351978c3",
      title: "File A1-1",
      parentId: "5dcfbedc-db10-4df0-a7f3-1b60b4282036", // Parent: Folder A1
      type: "file",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "598cc731-e7e8-4651-b64a-7958f64b327a" },
    update: {},
    create: {
      id: "598cc731-e7e8-4651-b64a-7958f64b327a",
      title: "File A1-2",
      parentId: "5dcfbedc-db10-4df0-a7f3-1b60b4282036", // Parent: Folder A1
      type: "file",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "fa3fb2c7-0519-4d72-8f82-e930716aa650" },
    update: {},
    create: {
      id: "fa3fb2c7-0519-4d72-8f82-e930716aa650",
      title: "File A1-3",
      parentId: "5dcfbedc-db10-4df0-a7f3-1b60b4282036", // Parent: Folder A1
      type: "file",
    },
  });

  // Folder A2 subfolders and files
  await prisma.fileFolders.upsert({
    where: { id: "7d9a1ba3-0a99-47f6-967b-04e333e8e8af" },
    update: {},
    create: {
      id: "7d9a1ba3-0a99-47f6-967b-04e333e8e8af",
      title: "Folder A2-1",
      parentId: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8", // Parent: Folder A2
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "d3f3abaf-1b06-441f-b2da-7e948db2f260" },
    update: {},
    create: {
      id: "d3f3abaf-1b06-441f-b2da-7e948db2f260",
      title: "Folder A2-2",
      parentId: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8", // Parent: Folder A2
      type: "folder",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "db494573-4555-4230-bdf1-58a9a4e5dba7" },
    update: {},
    create: {
      id: "db494573-4555-4230-bdf1-58a9a4e5dba7",
      title: "Folder A2-3",
      parentId: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8", // Parent: Folder A2
      type: "folder",
    },
  });

  // Files under Folder A2
  await prisma.fileFolders.upsert({
    where: { id: "aec7fffa-86e5-48b7-b77e-7a104e22b832" },
    update: {},
    create: {
      id: "aec7fffa-86e5-48b7-b77e-7a104e22b832",
      title: "File A2-1",
      parentId: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8", // Parent: Folder A2
      type: "file",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "f62ff0bc-b816-4c3d-9b88-75858fdf5cc5" },
    update: {},
    create: {
      id: "f62ff0bc-b816-4c3d-9b88-75858fdf5cc5",
      title: "File A2-2",
      parentId: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8", // Parent: Folder A2
      type: "file",
    },
  });

  await prisma.fileFolders.upsert({
    where: { id: "bfb8a0cf-21d0-40e7-8361-d0f2af42cdbd" },
    update: {},
    create: {
      id: "bfb8a0cf-21d0-40e7-8361-d0f2af42cdbd",
      title: "File A2-3",
      parentId: "0a671e36-9a0c-4394-9cc6-9e4d2a0401a8", // Parent: Folder A2
      type: "file",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
