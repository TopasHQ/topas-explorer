export type Params = Record<string, string | number>;

type Meta = {
  count: number;
  offset: number;
  total: number;
};

export type ApiResponse<T> = {
  meta: Meta;
  data: T[];
};

export type BaseAccountData = {
  summary: {
    address: string;
    balance: string;
    username: string;
    publicKey: string;
    isDelegate: boolean;
    isMultisignature: boolean;
    legacyAddress?: string | null;
    isMigrated?: boolean | null;
  };
  token: {
    balance: string;
  };
  sequence: {
    nonce: string;
  };
  keys: {
    numberOfSignatures: number;
    mandatoryKeys: string[];
    optionalKeys: string[];
    members: {
      address: string;
      publicKey: string;
      isMandatory: boolean;
    }[];
    memberships: {
      address: string;
      publicKey: string;
    }[];
  };
  dpos: {
    delegate: {
      username: string;
      consecutiveMissedBlocks: number;
      lastForgedHeight?: number | null;
      isBanned: boolean;
      totalVotesReceived: string;
      registrationHeight?: number | null;
      voteWeight?: string | null;
      producedBlocks?: number | null;
      rank?: number | null;
      status?: string | null;
      rewards?: string | null;
    };
  };
  knowledge: {
    owner: string;
    description: string;
  };
};

type CustomAccountData = {
  topasApp: {
    appsCreated: {
      id: string;
      title: string;
    }[];
    appsPurchased: {
      id: string;
      title: string;
    }[];
  };
  topasUser: {
    username: string;
    avatar: string;
    memberType: number;
    memberSince: {
      unix: number;
      human: string;
    };
  };
  leaderboard: {
    highscores?: null[] | null;
  };
};

export type Account = BaseAccountData & CustomAccountData;

export type Block = {
  id: string;
  height: number;
  version: number;
  timestamp: number;
  generatorAddress: string;
  generatorPublicKey: string;
  generatorUsername: string;
  transactionRoot: string;
  signature: string;
  previousBlockId: string;
  numberOfTransactions: number;
  totalForged: string;
  totalBurnt: string;
  totalFee: string;
  reward: string;
  isFinal: boolean;
  maxHeightPreviouslyForged: number;
  maxHeightPrevoted: number;
  seedReveal: string;
};

export type Transaction = {
  id: string;
  moduleAssetId: string;
  moduleAssetName: string;
  fee: string;
  height: number;
  nonce: string;
  block: {
    id: string;
    height: number;
    timestamp: number;
  };
  sender: {
    address: string;
    publicKey: string;
    username?: string | null;
  };
  signatures: string[];
  asset: unknown;
  isPending: boolean;
};
