"use server";

import * as trigger from "@trigger.dev/sdk/v3";

export async function create() {
  return Object.keys(trigger);
}
