export class SheetView {
    
}

export class Selection {
    readonly column: number;
    readonly row: number;

    constructor(column: number, row: number) {
        this.column = column;
        this.row = row;
    }

    render(): string {
        // c = column div 26 < 26 then letter(c)
        // c = column div 26 < 26 then recurse(c) + letter(c)

        const letter = (n: number): string => {
            if (n < 0 || n > 25)
                throw new 
                    RangeError(`${n} out of range to convert to column letter.`);
            else
                return String.fromCharCode(n + 65);
        };

        const columnToLetter = (c: number): string => {
            const quotient = Math.floor(c / 26);
            const remainder = c % 26;

            if (quotient < 1) {
                return letter(remainder);
            }
            else if (quotient < 26) {
                return letter(quotient - 1) + letter(remainder);
            }
            else {
                return columnToLetter(quotient) + letter(remainder);
            }
        }

        return columnToLetter(this.column) + (this.row + 1).toString();
    }
}