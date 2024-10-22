const BASE_URL = "http://localhost:8000";

export const encryptFile = async (file, shift) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("shift", shift);

  const response = await fetch(`${BASE_URL}/encrypt`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to encrypt file");
  }
  return response.json();
};

export const decryptFile = async (file, shift) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("shift", shift);

  const response = await fetch(`${BASE_URL}/decrypt`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to decrypt file");
  }
  return response.json();
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload file");
  }
  return response.json();
};
