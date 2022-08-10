function solve(a: number, b: number) {

    class MyClass {
        private readonly num1: number
        private readonly num2: number
        private remainder: number = 0

        constructor(a: number, b: number) {
            this.num1 = a
            this.num2 = b
        }

        public static run = (a: number, b: number) => {
            return new MyClass(a, b)
        }

        private setArr = (num: number) => {
            return num.toString().split("").map(i => ~~i)
        }

        private add = (a1: number, b1: number) => {
            const addedValue = a1 + b1 + this.remainder
            const isLess10 = addedValue < 10
            this.remainder = !isLess10 ? Math.floor(addedValue / 10) : 0;
            return addedValue % 10;
        }

        private whichIsBigger = (a: number[], b: number[]) => {
            if (a.length < b.length) return { one: b, two: a };
            return { one: a, two: b };
        }

        private addedArr(items1: number[], items2: number[]) {
            const redArr = this.whichIsBigger(items1, items2);

            const result = redArr.one.reduce((total: string, _, i: number) => {
                const num1 = redArr.one[redArr.one.length - 1 - i] ?? 0;
                const num2 = redArr.two[redArr.two.length - 1 - i] ?? 0;

                return this.add(num1, num2) + total
            }, '')

            return ((this.remainder === 0 ? "" : this.remainder) + result).split("")
        }

        public working = () => {
            const items1 = this.setArr(this.num1) // [2,4,4,8] or [3,4] or [4,4]
            const items2 = this.setArr(this.num2) // [7,4] or [4,5,5,5] or [5,5]

            return this.addedArr(items1, items2).join("")
        }
    }

    return MyClass.run(a, b).working()
}
