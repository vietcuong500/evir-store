"use client";

import { SnackbarProvider } from "notistack";

export default function ToastProvider(props: any) {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      style={{
        color: "white",
      }}
    >
      {props.children}
    </SnackbarProvider>
  );
}
