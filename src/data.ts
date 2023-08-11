/* eslint-disable prettier/prettier */

export enum ReportType {
  EXPENCE = 'expence',
  INCOME = 'income',
}

export const data: Data = {
  report: [
    {
      id: '121',
      amount: 2500,
      created_at: new Date(),
      source: 'hello',
      type: ReportType.EXPENCE,
      updated_at: new Date(),
    },

    {
      id: '34121',
      amount: 500,
      created_at: new Date(),
      source: 'hello dfderf',
      type: ReportType.INCOME,
      updated_at: new Date(),
    },
  ],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
