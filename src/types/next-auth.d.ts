import type { JWT } from "next-auth/jwt";
import { User } from "next-auth";
declare module "next/auth" {
  interface JWT {
    id: UserId;
    username?: string | null;
  }
}

declare module "next/auth" {
  interface Session {
    user: User & {
      id: UserId;
      username?: string | null;
    };
  }
}
