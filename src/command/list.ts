import * as _ from "lodash";

import { Context } from "../types";
import { getAddressFromKey } from "../util";

export async function listKeys({ cckey, networkId }: Context): Promise<void> {
    let keys = await cckey.keystore.getKeys();
    keys = _.map(keys, key => getAddressFromKey(key, networkId));
    if (keys.length === 0) {
        console.log("");
    } else {
        console.log(_.join(keys, "\n"));
    }
}
