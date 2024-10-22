import { useMutation } from "@tanstack/react-query";
import { encryptFile, decryptFile, uploadFile } from "./api";

export const useEncryptFile = () => {
  return useMutation(encryptFile);
};

export const useDecryptFile = () => {
  return useMutation(decryptFile);
};

export const useUploadFile = () => {
  return useMutation(uploadFile);
};
