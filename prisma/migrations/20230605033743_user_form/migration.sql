-- CreateTable
CREATE TABLE "UserForm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "plan" INTEGER NOT NULL,
    "onlineService" BOOLEAN NOT NULL,
    "largerStorage" BOOLEAN NOT NULL,
    "customizableProfile" BOOLEAN NOT NULL,

    CONSTRAINT "UserForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserForm_email_key" ON "UserForm"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserForm_phone_key" ON "UserForm"("phone");
