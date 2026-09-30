/**
 * Canonical placeholder Stellar account (32 zero bytes encoded as an Ed25519 public key StrKey)
 * used as the source account for simulations and read-only contract calls when no wallet
 * is connected.
 */
export const DEFAULT_READ_SOURCE_ACCOUNT =
  "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF";

export const DEFAULT_SIMULATION_SOURCE_ACCOUNT = DEFAULT_READ_SOURCE_ACCOUNT;
