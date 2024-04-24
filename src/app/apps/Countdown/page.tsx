"use client";

import { useRef } from "react";
import Challenge from "./components/Challenge";
import ResultDialog from "./components/Dialog";
import { CountdownForm } from "./components/Form";

export default function CountdownPage() {
  const dialog = useRef<HTMLDialogElement>(null);

  // setTimeout(() => {

  //   dialog.current.opened();
  // }, 1000)

  return (
    <>
      <ResultDialog ref={dialog} />
      <CountdownForm />
      <Challenge />
    </>
  );
}
