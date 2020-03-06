import { Context } from "../types";
import { getAddressFromKey } from "../util";

export async function createKey(
    { cckey, networkId }: Context,
    passphrase: string
): Promise<void> {
    const key = await cckey.keystore.createKey({
        passphrase
    });

    console.log(getAddressFromKey(key, networkId));
}
