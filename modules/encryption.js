import { randomBytes, createHmac } from "node:crypto";
import { HMAC_ENCRYPTION_METHOD } from "./constants.js";

export function encryptMove(move) {
  const key = randomBytes(32).toString("hex");
  const hmac = createHmac(HMAC_ENCRYPTION_METHOD, key);
  hmac.update(move);
  return { key, hmac: hmac.digest("hex") };
}
