// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク
// 初期import
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "../types/User";
import { useRouter } from "next/navigation";

// 2-a：Propsのインターフェース定義
interface EditUserFormProps{
  userId:string;
}
// 必要に応じて利用する　2-bでそのまま使用
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({ userId }) => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>
    </Box>
  );
};

export default EditUserForm;
