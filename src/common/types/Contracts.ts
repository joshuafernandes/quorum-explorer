
export type SCDFunctionArg = {
  name: string,
  type: string,
  value: string|number
}

export type SCDConstructor = {
  inputs: SCDFunctionArg[]
}

export const VoidSCDConstructor : SCDConstructor = {
  inputs: []
}

export type SCDFunction = {
  inputs: SCDFunctionArg[]
  outputs: SCDFunctionArg[]
  name: string
}
// todo check on this type - we don't really use it atm
export type SCDEvent = {
  inputs: SCDFunctionArg[]
  outputs: SCDFunctionArg[]
  name: string
}

export type SCDefinition = {
  constructor: SCDConstructor,
  functions: SCDFunction[],
  events: SCDEvent[]
}

export const VoidSCDefinition: SCDefinition = {
    constructor: VoidSCDConstructor,
    functions: [],
    events: []
}

// below are type definitions for the contart we display in the dropdown
export type SmartContract = {
  name: string;
  contract: string;
};

export type CompiledContract = {
  abi: [];
  bytecode: string;
};

export const defaultSmartContracts: SmartContract[] = [
  {
    name: "SimpleStorage",
    contract: `pragma solidity ^0.7.6;
    contract SimpleStorage {
      uint public storedData;
      event stored(address _to, uint _amount);
        
      constructor(uint initVal) public {
        emit stored(msg.sender, initVal);
        storedData = initVal;
      }
        
      function set(uint x) public {
        emit stored(msg.sender, x);
        storedData = x;
      }
        
      function get() view public returns (uint retVal) {
        return storedData;
      }

    }`,
  },
];
