export interface Expense {
    readonly id: string;
    readonly userId: string;
    description?: string;
    amountInPence: number;
    category?: string;
    date: Date;
}