import { CCKey } from "foundry-keystore";

export type Action = "list" | "create" | "delete";

export interface CommonOption {
    keysPath: string;
    networkId: string;
}

export interface ListOption {
    parent: CommonOption;
}

export interface CreateOption {
    parent: CommonOption;
    passphrase: string;
}

export interface DeleteOption {
    parent: CommonOption;
    address: string;
}

export interface ImportOption {
    parent: CommonOption;
    passphrase: string;
}

export interface ExportOption {
    parent: CommonOption;
    address: string;
    passphrase: string;
    pretty: boolean;
}

export interface Context {
    cckey: CCKey;
    networkId: string;
}
