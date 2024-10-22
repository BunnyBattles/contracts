/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  Groth16Verifier,
  Groth16VerifierInterface,
} from "../../moveVerifier.sol/Groth16Verifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_pA",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "_pB",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "_pC",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[4]",
        name: "_pubSignals",
        type: "uint256[4]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610723806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635fe8c13b14610030575b600080fd5b61004a6004803603810190610045919061064e565b610060565b60405161005791906106d2565b60405180910390f35b600061057b565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018110610098576000805260206000f35b50565b600060405183815284602082015285604082015260408160608360076107d05a03fa9150816100ce576000805260206000f35b825160408201526020830151606082015260408360808360066107d05a03fa9150816100fe576000805260206000f35b505050505050565b600060808601600087017e35a9383efe68845ceb7f416c31fb22ca8656e52e50659810a63c7dfbf7a49b81527f2e1651c8c5d9fbb206fa7bd08d930b7765afd52af4176dd5cfe5ea9203a80e9160208201526101a860008801357f26e916469e46afc7ecd2e41eacb251e5fc62608cb2f07381f8756bb6c5c094ef7f08667c69d00a4b006ec9bb1888fd24adabe4811f0b0b573170e60097861918018461009b565b6101f860208801357f025c7a23c5c7587fd57a847f9b9580ed59c97713cbbf7671c84c6c8db8f3711e7f05c462166a55983c606ff513b57e91e45a00f5d416eefb87665aaa767bc05c6b8461009b565b61024860408801357f21fc7bd0f741033122cdcba82c9cf4cb188c1c1823e71864d9ba6782139951097f2c55066f8a4c9f0d75fd332639c5e70db0597649198c96be5f473ffc96b780238461009b565b61029860608801357f0ac6d1169db521467c80528932e10bf6248c3e59fca21bff60c77e8a3952896f7f16da071e6c5dbe69df19d8607a8f9dc31257711764e587939acc29c7b2f8d28f8461009b565b833582527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4760208501357f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4703066020830152843560408301526020850135606083015260408501356080830152606085013560a08301527f17e978fc07d257e8028a790fe9d217ce7bef13dff54582edf10a45847c3e636960c08301527f1377385776c6495dbfd29497db1c11a998dbbad55189c9ddcb98c3d90e1ea82060e08301527f22ccf9995a3b39af30e10be425832a7469e8a3d8ceb0c875598e5518396b587d6101008301527ec5f5a35485ec1861de3a06706dd255f80ab34a3cfbddfd0ab058753440edb26101208301527f20ef50a12d6dc8bb8a5d925563021a1c6742d47e0d424943af5417149503647c6101408301527f0ce7dfadbe7b0c62905ae834a483e5b7d4bdbb1ef8a7de79effa1429d51649ab610160830152600088015161018083015260206000018801516101a08301527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26101c08301527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6101e08301527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6102008301527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa610220830152853561024083015260208601356102608301527f1c7da2e052c4090898865dd4525b8140aa92e30caeabdb9758cb71ca62a800386102808301527f1a27da501a3bdcd027c2be47b26b844a64970c1ec45c561960064a3036fafc7e6102a08301527f133330c323057a31749818df6be49473bdd4e1817a1c899a7c2491dff72dcee16102c08301527f1a3148da2dcbbea205aba3d5c62316f2c6c84803f0ea14592f615ad43c8cdba56102e08301526020826103008460086107d05a03fa82518116935050505095945050505050565b60405161038081016040526105936000840135610067565b6105a06020840135610067565b6105ad6040840135610067565b6105ba6060840135610067565b6105c76080840135610067565b6105d4818486888a610106565b8060005260206000f35b600080fd5b600080fd5b600081905082602060020282011115610604576106036105e3565b5b92915050565b600081905082604060020282011115610626576106256105e3565b5b92915050565b600081905082602060040282011115610648576106476105e3565b5b92915050565b6000806000806101808587031215610669576106686105de565b5b6000610677878288016105e8565b94505060406106888782880161060a565b93505060c0610699878288016105e8565b9250506101006106ab8782880161062c565b91505092959194509250565b60008115159050919050565b6106cc816106b7565b82525050565b60006020820190506106e760008301846106c3565b9291505056fea2646970667358221220520cb7e599dc5b3d51ece2211fd81f064325d3f4bf20dd408dd2ee7c7b7165dc64736f6c63430008180033";

type Groth16VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Groth16VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Groth16Verifier__factory extends ContractFactory {
  constructor(...args: Groth16VerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Groth16Verifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Groth16Verifier__factory {
    return super.connect(runner) as Groth16Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Groth16VerifierInterface {
    return new Interface(_abi) as Groth16VerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Groth16Verifier {
    return new Contract(address, _abi, runner) as unknown as Groth16Verifier;
  }
}
