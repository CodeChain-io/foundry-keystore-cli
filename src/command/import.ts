import { SecretStorage } from "foundry-keystore";

import { Context } from "../types";
import { getAddressFromKey } from "../util";

export async function importKey(
    { cckey, networkId }: Context,
    secret: SecretStorage,
    passphrase: string
): Promise<void> {
    const key = await cckey.keystore.importKey({
        secret,
        passphrase
    });

    console.log(getAddressFromKey(key, networkId));
}
