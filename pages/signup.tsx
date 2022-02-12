import React from "react";
import { SignUpForm } from "../Components/AuthForms";

const SignUp = () => {
  return (
    <div className="px-2 flex w-full  items-center justify-center">
      <SignUpForm />
    </div>
  );
};

export default SignUp;

// model User {
//     id        Int      @id @default(autoincrement())
//     createdAt DateTime @default(now())
//     email     String   @unique
//     name      String
//     password  String
//     post      Post[]
//   }

//   model Post {
//     id        String   @id @default(cuid())
//     author    User?    @relation(fields: [authorId], references: [id])
//     authorId  Int?
//     cover     String
//     title     String
//     desc      String
//     tags      String
//     createdAt DateTime @default(now())
//   }
