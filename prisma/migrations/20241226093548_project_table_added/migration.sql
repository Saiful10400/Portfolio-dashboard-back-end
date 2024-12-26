-- CreateTable
CREATE TABLE "project" (
    "id" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "projectSummary" TEXT NOT NULL,
    "technologies" TEXT[],
    "slug" TEXT NOT NULL,
    "projectLink" TEXT,
    "repoLink" TEXT,
    "projectCreationDate" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "coverImage" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],
    "projectCreationDuration" TEXT,

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "project_slug_key" ON "project"("slug");
