/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  QuestChain,
  QuestChainInterface,
} from "../../contracts/QuestChain";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "editor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "details",
        type: "string",
      },
    ],
    name: "QuestChainEdited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "details",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "quests",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool",
      },
    ],
    name: "QuestChainInit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "QuestChainTokenURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "reviewer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "questerList",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "questIdList",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "successList",
        type: "bool[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "detailsList",
        type: "string[]",
      },
    ],
    name: "QuestProofsReviewed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "quester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "questIdList",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "proofList",
        type: "string[]",
      },
    ],
    name: "QuestProofsSubmitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "questIdList",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "detailsList",
        type: "string[]",
      },
    ],
    name: "QuestsCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "editor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "questIdList",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "detailsList",
        type: "string[]",
      },
    ],
    name: "QuestsEdited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "editor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "questIdList",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "pausedList",
        type: "bool[]",
      },
    ],
    name: "QuestsPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EDITOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REVIEWER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_detailsList",
        type: "string[]",
      },
    ],
    name: "createQuests",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_details",
        type: "string",
      },
    ],
    name: "edit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_questIdList",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "_detailsList",
        type: "string[]",
      },
    ],
    name: "editQuests",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "owners",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "admins",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "editors",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "reviewers",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "quests",
            type: "string[]",
          },
          {
            internalType: "bool",
            name: "paused",
            type: "bool",
          },
          {
            internalType: "string",
            name: "details",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
        ],
        internalType: "struct QuestChainCommons.QuestChainInfo",
        name: "_info",
        type: "tuple",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_questIdList",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "_pausedList",
        type: "bool[]",
      },
    ],
    name: "pauseQuests",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
  {
    inputs: [],
    name: "premium",
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
  {
    inputs: [],
    name: "questChainFactory",
    outputs: [
      {
        internalType: "contract IQuestChainFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "questChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "questChainToken",
    outputs: [
      {
        internalType: "contract IQuestChainToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "questCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "questPaused",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_quester",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_questId",
        type: "uint256",
      },
    ],
    name: "questStatus",
    outputs: [
      {
        internalType: "enum IQuestChain.Status",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_questerList",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_questIdList",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "_successList",
        type: "bool[]",
      },
      {
        internalType: "string[]",
        name: "_detailsList",
        type: "string[]",
      },
    ],
    name: "reviewProofs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
    ],
    name: "setTokenURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_questIdList",
        type: "uint256[]",
      },
      {
        internalType: "string[]",
        name: "_proofList",
        type: "string[]",
      },
    ],
    name: "submitProofs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060016000819055805462ff0000191690819055610100900460ff16158080156200004057506001805460ff16105b806200006f57506200005d306200014760201b620015221760201c565b1580156200006f57506001805460ff16145b620000d75760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6001805460ff1916811790558015620000fa576001805461ff0019166101001790555b801562000140576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5062000156565b6001600160a01b03163b151590565b6128fc80620001666000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c8063723c05351161011a578063bca834cd116100ad578063e0a73a931161007c578063e0a73a931461043e578063e0df5b6f1461044b578063e58378bb146103cb578063f5f3af721461045e578063faa0a2641461047157600080fd5b8063bca834cd146103fb578063d4a191161461040e578063d547741f14610423578063d55ec6971461043657600080fd5b806392857087116100e957806392857087146103b8578063a217fddf146103cb578063a853211a146103d3578063aea8ad2b146103e857600080fd5b8063723c05351461036857806375b238fc146103885780638456cb591461039d57806391d14854146103a557600080fd5b80632f2ff15d116101925780633b129a56116101615780633b129a56146103275780633f4ba83a1461033c57806358853ead146103445780635c975abb1461035757600080fd5b80632f2ff15d146102ef5780633039b9a11461030257806336568abe1461030b5780633970ab431461031e57600080fd5b80630d66f596116101ce5780630d66f596146102735780632004ffd9146102a3578063248a9ca3146102ab57806329538def146102dc57600080fd5b806301ffc9a7146102005780630572902c14610228578063070e88361461024b578063096ef17514610260575b600080fd5b61021361020e366004611daa565b610479565b60405190151581526020015b60405180910390f35b610213610236366004611dd4565b60076020526000908152604090205460ff1681565b61025e610259366004611ded565b6104b0565b005b61025e61026e366004611e73565b610a61565b60035461028b9061010090046001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b61025e610b5f565b6102ce6102b9366004611dd4565b60009081526002602052604090206001015490565b60405190815260200161021f565b60045461028b906001600160a01b031681565b61025e6102fd366004611ec9565b610ce0565b6102ce60055481565b61025e610319366004611ec9565b610d81565b6102ce60065481565b6102ce60008051602061286783398151915281565b61025e610dfb565b61025e610352366004611ef9565b610e1e565b60015462010000900460ff16610213565b61037b610376366004611fbc565b610f42565b60405161021f9190611ffe565b6102ce6000805160206128a783398151915281565b61025e610f92565b6102136103b3366004611ec9565b610fb2565b61025e6103c6366004612026565b610fdd565b6102ce600081565b6102ce60008051602061288783398151915281565b61025e6103f6366004612097565b611035565b61025e610409366004612097565b6110d8565b610416611194565b60405161021f9190612152565b61025e610431366004611ec9565b61120e565b61025e6112ad565b6003546102139060ff1681565b61025e6104593660046121d2565b611377565b61025e61046c366004612097565b6113ef565b61025e6114e5565b60006001600160e01b03198216637965db0b60e01b14806104aa57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600154610100900460ff16158080156104cd57506001805460ff16105b806104e65750303b1580156104e657506001805460ff16145b61054e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6001805460ff1916811790558015610570576001805461ff0019166101001790555b60038054610100338102610100600160a81b03199092169190911791829055604080516329538def60e01b81529051919092046001600160a01b0316916329538def9160048083019260209291908290030181865afa1580156105d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fb9190612251565b600480546001600160a01b0319166001600160a01b0392831617815560035460408051630254a95960e01b8152905161010090920490931692630254a95992818101926020929091908290030181865afa15801561065d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610681919061226e565b60055561069d6000805160206128a78339815191526000611531565b6106c36000805160206128878339815191526000805160206128a7833981519152611531565b6106e96000805160206128678339815191526000805160206128a7833981519152611531565b6107336106f960e0840184612287565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061157c92505050565b600061073f83806122cd565b9050116107865760405162461bcd60e51b81526020600482015260156024820152745175657374436861696e3a206e6f206f776e65727360581b6044820152606401610545565b60005b61079383806122cd565b905081101561083b576107d560006107ab85806122cd565b848181106107bb576107bb612316565b90506020020160208101906107d0919061232c565b61161b565b6107f16000805160206128a78339815191526107ab85806122cd565b61080d6000805160206128878339815191526107ab85806122cd565b6108296000805160206128678339815191526107ab85806122cd565b61083481600161235f565b9050610789565b5060005b61084c60208401846122cd565b90508110156108c4576108746000805160206128a78339815191526107ab60208601866122cd565b6108936000805160206128878339815191526107ab60208601866122cd565b6108b26000805160206128678339815191526107ab60208601866122cd565b6108bd81600161235f565b905061083f565b5060005b6108d560408401846122cd565b905081101561092e576108fd6000805160206128878339815191526107ab60408601866122cd565b61091c6000805160206128678339815191526107ab60408601866122cd565b61092781600161235f565b90506108c8565b5060005b61093f60608401846122cd565b9050811015610979576109676000805160206128678339815191526107ab60608601866122cd565b61097281600161235f565b9050610932565b5061098760808301836122cd565b600654610994925061235f565b6006556109a760c0830160a08401612387565b156109b4576109b46116a1565b7fb22b6d3ba699862d93cbd674b13000ba01ec36002a43507beb52acc8e41d0bb06109e260c0840184612287565b6109ef60808601866122cd565b6109ff60c0880160a08901612387565b604051610a1095949392919061245c565b60405180910390a18015610a5d576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b600080516020612887833981519152610a79816116ff565b60065482906000826001600160401b03811115610a9857610a98612165565b604051908082528060200260200182016040528015610ac1578160200160208202803683370190505b50905060005b83811015610afe57610ad9818461235f565b828281518110610aeb57610aeb612316565b6020908102919091010152600101610ac7565b508585905060066000828254610b14919061235f565b909155507fedee852218cea067763c965716df20fecc7452da915e5195d0632af6ecfeb42c905033828888604051610b4f9493929190612498565b60405180910390a1505050505050565b6006543390610bb05760405162461bcd60e51b815260206004820152601b60248201527f5175657374436861696e3a206e6f2071756573747320666f756e6400000000006044820152606401610545565b60005b600654811015610c6f5760008181526007602052604090205460ff1680610c11575060026001600160a01b038316600090815260086020908152604080832085845290915290205460ff166003811115610c0f57610c0f611fe8565b145b610c5d5760405162461bcd60e51b815260206004820152601c60248201527f5175657374436861696e3a20636861696e20696e636f6d706c657465000000006044820152606401610545565b610c6881600161235f565b9050610bb3565b50600480546005546040516340c10f1960e01b81526001600160a01b038581169482019490945260248101919091529116906340c10f19906044015b600060405180830381600087803b158015610cc557600080fd5b505af1158015610cd9573d6000803e3d6000fd5b5050505050565b600082815260026020526040902060010154610cfb816116ff565b610d05838361161b565b82610d2757610d226000805160206128a783398151915283610ce0565b505050565b6000805160206128a78339815191528303610d5457610d2260008051602061288783398151915283610ce0565b6000805160206128878339815191528303610d2257610d2260008051602061286783398151915283610ce0565b6001600160a01b0381163314610df15760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610545565b610a5d8282611709565b6000805160206128a7833981519152610e13816116ff565b610e1b611770565b50565b600080516020612867833981519152610e36816116ff565b878681148015610e4557508085145b8015610e5057508083145b610e6c5760405162461bcd60e51b815260040161054590612503565b60005b81811015610eee57610ee68b8b83818110610e8c57610e8c612316565b9050602002016020810190610ea1919061232c565b8a8a84818110610eb357610eb3612316565b90506020020135898985818110610ecc57610ecc612316565b9050602002016020810190610ee19190612387565b6117ab565b600101610e6f565b507fa44f4731b79226adb98d9bdc9b58ad2249721e00c4888fddc4d37436029c1cda338b8b8b8b8b8b8b8b604051610f2e999897969594939291906125ac565b60405180910390a150505050505050505050565b6000816006548110610f665760405162461bcd60e51b81526004016105459061264c565b50506001600160a01b039091166000908152600860209081526040808320938352929052205460ff1690565b6000805160206128a7833981519152610faa816116ff565b610e1b6116a1565b60009182526002602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6000805160206128a7833981519152610ff5816116ff565b7f16e4330852b4bc2323e9612fedd2b6f0bb12cc9de8eb1b1e65e79fc5d4873f2133848460405161102893929190612683565b60405180910390a1505050565b61103d6118ab565b8281811461105d5760405162461bcd60e51b815260040161054590612503565b60005b818110156110915761108986868381811061107d5761107d612316565b905060200201356118f9565b600101611060565b507f19eeef19a0e74691a24fe2467a93d053b6c34c71aa35860c3e26831f7c5d42c933868686866040516110c99594939291906126b1565b60405180910390a15050505050565b6000805160206128878339815191526110f0816116ff565b838281146111105760405162461bcd60e51b815260040161054590612503565b60005b8181101561115c5760065487878381811061113057611130612316565b90506020020135106111545760405162461bcd60e51b81526004016105459061264c565b600101611113565b507f4a84fd725719f655693f567a636b9ef15d0d7a26cb097a8ca8afeef5b180f01f3387878787604051610b4f9594939291906126b1565b600480546005546040516303a24d0760e21b8152928301526060916001600160a01b0390911690630e89341c90602401600060405180830381865afa1580156111e1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261120991908101906126f5565b905090565b600082815260026020526040902060010154611229816116ff565b6112338383611709565b600080516020612867833981519152830361126057610d226000805160206128878339815191528361120e565b600080516020612887833981519152830361128d57610d226000805160206128a78339815191528361120e565b6000805160206128a78339815191528303610d2257610d2260008361120e565b60035461010090046001600160a01b0316336001600160a01b0316146113155760405162461bcd60e51b815260206004820152601760248201527f5175657374436861696e3a206e6f7420666163746f72790000000000000000006044820152606401610545565b60035460ff16156113685760405162461bcd60e51b815260206004820152601c60248201527f5175657374436861696e3a20616c7265616479207570677261646564000000006044820152606401610545565b6003805460ff19166001179055565b6000805160206128a783398151915261138f816116ff565b60035460ff1615156001146113e65760405162461bcd60e51b815260206004820152601760248201527f5175657374436861696e3a206e6f74207072656d69756d0000000000000000006044820152606401610545565b610a5d8261157c565b600080516020612887833981519152611407816116ff565b838281146114275760405162461bcd60e51b815260040161054590612503565b60005b818110156114ad5784848281811061144457611444612316565b90506020020160208101906114599190612387565b156114845761147f87878381811061147357611473612316565b90506020020135611a1e565b6114a5565b6114a587878381811061149957611499612316565b90506020020135611ab9565b60010161142a565b507f3ef65d1c1f8ffdd5737bb7543700db6e0e1193e115534bdfe88d4ccdd9d7a3c03387878787604051610b4f959493929190612762565b60048054600554604051632770a7eb60e21b81523393810184905260248101919091526001600160a01b0390911690639dc29fac90604401610cab565b6001600160a01b03163b151590565b600082815260026020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b60048054600554604051630588253160e21b81526001600160a01b039092169263162094c4926115af929186910161279a565b600060405180830381600087803b1580156115c957600080fd5b505af11580156115dd573d6000803e3d6000fd5b505050507fd219d593b6adb46a0923918e69fbb20616170f633046c791d42dbce88a6ef1c8816040516116109190612152565b60405180910390a150565b6116258282610fb2565b610a5d5760008281526002602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561165d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6116a96118ab565b6001805462ff00001916620100001790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586116e23390565b6040516001600160a01b03909116815260200160405180910390a1565b610e1b8133611b55565b6117138282610fb2565b15610a5d5760008281526002602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b611778611bb9565b6001805462ff0000191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa336116e2565b8160065481106117cd5760405162461bcd60e51b81526004016105459061264c565b60016001600160a01b038516600090815260086020908152604080832087845290915290205460ff16600381111561180757611807611fe8565b146118545760405162461bcd60e51b815260206004820152601f60248201527f5175657374436861696e3a207175657374206e6f7420696e20726576696577006044820152606401610545565b81611860576003611863565b60025b6001600160a01b03851660009081526008602090815260408083208784529091529020805460ff191660018360038111156118a0576118a0611fe8565b021790555050505050565b60015462010000900460ff16156118f75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610545565b565b600081815260076020526040902054819060ff16156119555760405162461bcd60e51b8152602060048201526018602482015277145d595cdd10da185a5b8e881c5d595cdd081c185d5cd95960421b6044820152606401610545565b8160065481106119775760405162461bcd60e51b81526004016105459061264c565b33600090815260086020908152604080832086845290915290205460029060ff1660038111156119a9576119a9611fe8565b036119f65760405162461bcd60e51b815260206004820152601a60248201527f5175657374436861696e3a20616c7265616479207061737365640000000000006044820152606401610545565b505033600090815260086020908152604080832093835292905220805460ff19166001179055565b806006548110611a405760405162461bcd60e51b81526004016105459061264c565b600082815260076020526040902054829060ff1615611a9c5760405162461bcd60e51b8152602060048201526018602482015277145d595cdd10da185a5b8e881c5d595cdd081c185d5cd95960421b6044820152606401610545565b50506000908152600760205260409020805460ff19166001179055565b806006548110611adb5760405162461bcd60e51b81526004016105459061264c565b600082815260076020526040902054829060ff16611b3b5760405162461bcd60e51b815260206004820152601c60248201527f5175657374436861696e3a207175657374206e6f7420706175736564000000006044820152606401610545565b50506000908152600760205260409020805460ff19169055565b611b5f8282610fb2565b610a5d57611b77816001600160a01b03166014611c08565b611b82836020611c08565b604051602001611b939291906127bb565b60408051601f198184030181529082905262461bcd60e51b825261054591600401612152565b60015462010000900460ff166118f75760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610545565b60606000611c17836002612830565b611c2290600261235f565b6001600160401b03811115611c3957611c39612165565b6040519080825280601f01601f191660200182016040528015611c63576020820181803683370190505b509050600360fc1b81600081518110611c7e57611c7e612316565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611cad57611cad612316565b60200101906001600160f81b031916908160001a9053506000611cd1846002612830565b611cdc90600161235f565b90505b6001811115611d54576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611d1057611d10612316565b1a60f81b828281518110611d2657611d26612316565b60200101906001600160f81b031916908160001a90535060049490941c93611d4d8161284f565b9050611cdf565b508315611da35760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610545565b9392505050565b600060208284031215611dbc57600080fd5b81356001600160e01b031981168114611da357600080fd5b600060208284031215611de657600080fd5b5035919050565b600060208284031215611dff57600080fd5b81356001600160401b03811115611e1557600080fd5b82016101008185031215611da357600080fd5b60008083601f840112611e3a57600080fd5b5081356001600160401b03811115611e5157600080fd5b6020830191508360208260051b8501011115611e6c57600080fd5b9250929050565b60008060208385031215611e8657600080fd5b82356001600160401b03811115611e9c57600080fd5b611ea885828601611e28565b90969095509350505050565b6001600160a01b0381168114610e1b57600080fd5b60008060408385031215611edc57600080fd5b823591506020830135611eee81611eb4565b809150509250929050565b6000806000806000806000806080898b031215611f1557600080fd5b88356001600160401b0380821115611f2c57600080fd5b611f388c838d01611e28565b909a50985060208b0135915080821115611f5157600080fd5b611f5d8c838d01611e28565b909850965060408b0135915080821115611f7657600080fd5b611f828c838d01611e28565b909650945060608b0135915080821115611f9b57600080fd5b50611fa88b828c01611e28565b999c989b5096995094979396929594505050565b60008060408385031215611fcf57600080fd5b8235611fda81611eb4565b946020939093013593505050565b634e487b7160e01b600052602160045260246000fd5b602081016004831061202057634e487b7160e01b600052602160045260246000fd5b91905290565b6000806020838503121561203957600080fd5b82356001600160401b038082111561205057600080fd5b818501915085601f83011261206457600080fd5b81358181111561207357600080fd5b86602082850101111561208557600080fd5b60209290920196919550909350505050565b600080600080604085870312156120ad57600080fd5b84356001600160401b03808211156120c457600080fd5b6120d088838901611e28565b909650945060208701359150808211156120e957600080fd5b506120f687828801611e28565b95989497509550505050565b60005b8381101561211d578181015183820152602001612105565b50506000910152565b6000815180845261213e816020860160208601612102565b601f01601f19169290920160200192915050565b602081526000611da36020830184612126565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156121a3576121a3612165565b604052919050565b60006001600160401b038211156121c4576121c4612165565b50601f01601f191660200190565b6000602082840312156121e457600080fd5b81356001600160401b038111156121fa57600080fd5b8201601f8101841361220b57600080fd5b803561221e612219826121ab565b61217b565b81815285602083850101111561223357600080fd5b81602084016020830137600091810160200191909152949350505050565b60006020828403121561226357600080fd5b8151611da381611eb4565b60006020828403121561228057600080fd5b5051919050565b6000808335601e1984360301811261229e57600080fd5b8301803591506001600160401b038211156122b857600080fd5b602001915036819003821315611e6c57600080fd5b6000808335601e198436030181126122e457600080fd5b8301803591506001600160401b038211156122fe57600080fd5b6020019150600581901b3603821315611e6c57600080fd5b634e487b7160e01b600052603260045260246000fd5b60006020828403121561233e57600080fd5b8135611da381611eb4565b634e487b7160e01b600052601160045260246000fd5b808201808211156104aa576104aa612349565b8035801515811461238257600080fd5b919050565b60006020828403121561239957600080fd5b611da382612372565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b81835260006020808501808196508560051b810191508460005b8781101561244f5782840389528135601e1988360301811261240657600080fd5b870185810190356001600160401b0381111561242157600080fd5b80360382131561243057600080fd5b61243b8682846123a2565b9a87019a95505050908401906001016123e5565b5091979650505050505050565b6060815260006124706060830187896123a2565b82810360208401526124838186886123cb565b91505082151560408301529695505050505050565b6001600160a01b038516815260606020808301829052855191830182905260009186820191906080850190845b818110156124e1578451835293830193918301916001016124c5565b505084810360408601526124f68187896123cb565b9998505050505050505050565b6020808252601a908201527f5175657374436861696e3a20696e76616c696420706172616d73000000000000604082015260600190565b81835260006001600160fb1b0383111561255357600080fd5b8260051b80836020870137939093016020019392505050565b8183526000602080850194508260005b858110156125a15761258d82612372565b15158752958201959082019060010161257c565b509495945050505050565b6001600160a01b038a8116825260a060208084018290529083018a90526000918b9160c08501845b8d8110156125fb5784356125e781611eb4565b8416825293820193908201906001016125d4565b50858103604087015261260f818c8e61253a565b9350505050828103606084015261262781878961256c565b9050828103608084015261263c8185876123cb565b9c9b505050505050505050505050565b6020808252601b908201527f5175657374436861696e3a207175657374206e6f7420666f756e640000000000604082015260600190565b6001600160a01b03841681526040602082018190526000906126a890830184866123a2565b95945050505050565b6001600160a01b03861681526060602082018190526000906126d6908301868861253a565b82810360408401526126e98185876123cb565b98975050505050505050565b60006020828403121561270757600080fd5b81516001600160401b0381111561271d57600080fd5b8201601f8101841361272e57600080fd5b805161273c612219826121ab565b81815285602083850101111561275157600080fd5b6126a8826020830160208601612102565b6001600160a01b0386168152606060208201819052600090612787908301868861253a565b82810360408401526126e981858761256c565b8281526040602082015260006127b36040830184612126565b949350505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516127f3816017850160208801612102565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612824816028840160208801612102565b01602801949350505050565b600081600019048311821515161561284a5761284a612349565b500290565b60008161285e5761285e612349565b50600019019056fec10c77be35aff266144ed64c26a1fa104bae2f284ae99ac4a34203454704a18521d1167972f621f75904fb065136bc8b53c7ba1c60ccd3a7758fbee465851e9ca49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a26469706673582212201254323f4d30976aeea4ce43647cc3397c6b881dd9a74d35e72accf1628f9f0d64736f6c63430008100033";

type QuestChainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuestChainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QuestChain__factory extends ContractFactory {
  constructor(...args: QuestChainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<QuestChain> {
    return super.deploy(overrides || {}) as Promise<QuestChain>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): QuestChain {
    return super.attach(address) as QuestChain;
  }
  override connect(signer: Signer): QuestChain__factory {
    return super.connect(signer) as QuestChain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuestChainInterface {
    return new utils.Interface(_abi) as QuestChainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuestChain {
    return new Contract(address, _abi, signerOrProvider) as QuestChain;
  }
}
