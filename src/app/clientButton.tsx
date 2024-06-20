"use client";

import { create } from "./actions";

export default function TriggerKeys() {
  return (
    <>
      <button
        onClick={async () => {
          const triggerKeys = await create();
          console.log(triggerKeys);
        }}
      >
        Trigger Keys
      </button>
    </>
  );
}
