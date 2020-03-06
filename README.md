# foundry-keystore-cli [![Build Status](https://travis-ci.org/CodeChain-io/foundry-keystore-cli.svg?branch=master)](https://travis-ci.org/CodeChain-io/foundry-keystore-cli)

A command line for Foundry's key management tool

## How to install

### Binary install

You can download the latest binaries from [here](https://github.com/CodeChain-io/foundry-keystore-cli/releases/tag/0.1.1)

### Install using the npm package manager

```sh
npm install -g foundry-keystore-cli
```

### Install using the yarn package manager

```sh
yarn global add foundry-keystore-cli
```

## How to use

```sh
  Usage: cckey [options] [command]

  Options:

    -V, --version                      output the version number
    --keys-path <keysPath>             the path to store the keys (default: keystore.db)
    --network-id <networkId>           the id of the network (use 'cc' for mainnet, use 'wc' for corgi) (default: cc)
    -h, --help                         output usage information

  Commands:

    list                               list keys
    create [options]                   create a new key
    delete [options]                   delete a key
    import [options] <path>            import a key
    import-raw [options] <privateKey>  import a raw private key (64 byte hexadecimal string)
    export [options]                   export the key

  Examples:

    cckey create --passphrase "passphrase1"

    cckey list

    cckey delete --address cccqy6vhjxs8ddf6y6etgdqcs5elcrl6n6t0vdwumu8

    cckey import UTC--2020-03-05T02-47-14Z--6adba8c6-04ff-f649-6347-5c7946e28733 --passphrase "passphrase2"

    cckey export --address cccq8ah0efv5ckpx6wy5mwva2aklzwsdw027sqfksrr --passphrase "passphrase3"

    cckey import-raw b71f1a9a5fb62155b7ccc12841867e95a33da91c30515804546c7c5e575f2048287dec3980387a12ef9f159721c853e47e64a37f61407e0231ee62983cd6d2e --passphrase "passphrase4"
```
