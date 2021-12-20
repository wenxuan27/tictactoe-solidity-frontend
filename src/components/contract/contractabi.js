const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			}
		],
		"name": "GameCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "winner",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stepsPlayed",
				"type": "uint256"
			}
		],
		"name": "GameFinished",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "player",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "playerNumber",
				"type": "uint8"
			}
		],
		"name": "GameJoined",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			}
		],
		"name": "GameStarted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "playerNumber",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "x",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "y",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "step",
				"type": "uint256"
			}
		],
		"name": "GameStep",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "uint8[3][3]",
				"name": "board",
				"type": "uint8[3][3]"
			}
		],
		"name": "checkWin",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "winner",
				"type": "uint8"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "checkWin",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "winner",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "createNewGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "gameList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "gameId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "turn",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "winner",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "gameState",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "player1",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "player2",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stepsPlayed",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "getBoard",
		"outputs": [
			{
				"internalType": "uint8[3][3]",
				"name": "",
				"type": "uint8[3][3]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_x",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_y",
				"type": "uint8"
			}
		],
		"name": "getBoardItem",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "getGame",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "gameId",
						"type": "uint256"
					},
					{
						"internalType": "uint8[3][3]",
						"name": "board",
						"type": "uint8[3][3]"
					},
					{
						"internalType": "uint8",
						"name": "turn",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "winner",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "gameState",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "player1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "player2",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "stepsPlayed",
						"type": "uint256"
					}
				],
				"internalType": "struct Tictactoe.Game",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getGameListLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_playerNumber",
				"type": "uint8"
			}
		],
		"name": "getGamePlayerAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_player",
				"type": "address"
			}
		],
		"name": "getGamePlayerNumber",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "playerNumber",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "getStepsPlayed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "getTurn",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "joinGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_playerNumber",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "x",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "y",
				"type": "uint8"
			}
		],
		"name": "move",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "quitGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gameId",
				"type": "uint256"
			}
		],
		"name": "startGame",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

export default abi;
