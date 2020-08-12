import { SignInResponse } from "./sign-in.model";
import { SignOutResponse } from "./sign-out.model";
import { SignUpResponse } from "./sign-up.model";

export type AuthResponse = SignInResponse | SignOutResponse | SignUpResponse;