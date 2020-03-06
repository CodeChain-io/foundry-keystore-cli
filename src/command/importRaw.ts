import { PrivateKey } from "foundry-keystore/lib/types";

import { Context } from "../types";
import { getAddressFromKey } from "../util";

export async function importRawKey(
    { cckey, networkId }: Context,
    privateKey: PrivateKey,
    passphrase: string
): Promise<void> {
    const key = await cckey.keystore.importRaw({
        privateKey,
        passphrase
    });

    console.log(getAddressFromKey(key, networkId));
}
