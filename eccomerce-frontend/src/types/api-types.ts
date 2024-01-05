import { User } from 'firebase/auth';
export type MessageResponse = {
    success: boolean;
    message: string;
  };
  
  export type UserResponse = {
    success: boolean;
    user: User;
  };