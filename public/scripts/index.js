function solve(a, b) {
    class MyClass {
        constructor(a, b) {
            this.remainder = 0;
            this.setArr = (num) => {
                return num.toString().split("").map(i => ~~i);
            };
            this.add = (a1, b1) => {
                const addedValue = a1 + b1 + this.remainder;
                const isLess10 = addedValue < 10;
                this.remainder = !isLess10 ? Math.floor(addedValue / 10) : 0;
                return addedValue % 10;
            };
            this.whichIsBigger = (a, b) => {
                if (a.length < b.length)
                    return { one: b, two: a };
                return { one: a, two: b };
            };
            this.working = () => {
                const items1 = this.setArr(this.num1); // [2,4,4,8] or [3,4] or [4,4]
                const items2 = this.setArr(this.num2); // [7,4] or [4,5,5,5] or [5,5]
                return this.addedArr(items1, items2).join("");
            };
            this.num1 = a;
            this.num2 = b;
        }
        addedArr(items1, items2) {
            const redArr = this.whichIsBigger(items1, items2);
            const result = redArr.one.reduce((total, _, i) => {
                var _a, _b;
                const num1 = (_a = redArr.one[redArr.one.length - 1 - i]) !== null && _a !== void 0 ? _a : 0;
                const num2 = (_b = redArr.two[redArr.two.length - 1 - i]) !== null && _b !== void 0 ? _b : 0;
                return this.add(num1, num2) + total;
            }, '');
            return ((this.remainder === 0 ? "" : this.remainder) + result).split("");
        }
    }
    MyClass.run = (a, b) => {
        return new MyClass(a, b);
    };
    return MyClass.run(a, b).working();
}
