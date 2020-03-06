import { Action } from "./types";

export enum CLIErrorType {
    InvalidAction,
    InvalidAddress,
    OptionRequired,
    NoSuchAddress,
    Unknown
}

export class CLIError extends Error {
    constructor(type: CLIErrorType, args?: any) {
        super(getErrorMessage(type, args));
    }
}

function getErrorMessage(type: CLIErrorType, args: any = {}) {
    const actions: Action[] = ["list", "create", "delete"];

    switch (type) {
        case CLIErrorType.InvalidAction:
            return `Action should one of the ${JSON.stringify(actions)}`;
        case CLIErrorType.InvalidAddress:
            return `Address error: ${args.message}`;
        case CLIErrorType.OptionRequired:
            return `Option --${args.optionName} is required`;
        case CLIErrorType.NoSuchAddress:
            return `${args.address} is not found`;
        case CLIErrorType.Unknown:
            return `Internal error ${args.message}`;
        default:
            return `Internal error ${type}`;
    }
}
