import { Key } from "foundry-keystore/lib/types";
import { Address } from "foundry-primitives";
import * as _ from "lodash";

import { CLIError, CLIErrorType } from "./error";

export function getAddressFromKey(key: Key, networkId: string): string {
    const address = Address.fromAccountId(key, {
        networkId
    });
    return address.toString();
}

export function findMatchingKey(
    keys: Key[],
    address: string,
    networkId: string
): string {
    const addresses = _.map(keys, key => getAddressFromKey(key, networkId));
    const index = _.indexOf(addresses, address);
    if (index === -1) {
        throw new CLIError(CLIErrorType.NoSuchAddress, { address });
    }

    return keys[index];
}
