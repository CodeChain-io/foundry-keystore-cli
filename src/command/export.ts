import { SecretStorage } from "foundry-keystore";

import { Context } from "../types";
import { findMatchingKey } from "../util";

export async function exportKey(
    { cckey, networkId }: Context,
    address: string,
    passphrase: string
): Promise<SecretStorage> {
    const keys = await cckey.keystore.getKeys();
    const key = findMatchingKey(keys, address, networkId);
    return cckey.keystore.exportKey({
        key,
        passphrase
    });
}
