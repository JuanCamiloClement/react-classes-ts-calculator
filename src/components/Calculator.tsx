import { Component } from "react";
import Screen from "./Screen";
import Button from "./Button";

type CalculatorState = {
    screen: string,
    operation: string,
}

class Calculator extends Component<{}, CalculatorState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            screen: '',
            operation: '',
        }
    }

    handleType = (value: string) => {
        this.setState((state) => ({
            screen: `${state.screen}${value}`
        }));
    }

    handleAddOperation = (operation: string) => {
        this.setState((state) => ({
            operation: `${state.screen}${operation}`,
            screen: ''
        }))
    }

    handleTypeSecondNumber = (value: string) => {
        this.setState((state) => ({
            screen: `${state.screen}${value}`,
            operation: `${state.operation}${value}`
        }));
    }

    handleCalculate = (operation: string) => {
        const result = parseFloat(eval(operation));

        this.setState(() => ({
            screen: result.toString(),
        }));
    }

    clearFunction = () => {
        this.setState(() => ({
            screen: '',
            operation: '',
        }));
    }

    render() {
        const { screen, operation } = this.state;

        const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const operations: string[] = ['+', '-', '*', '/'];

        return (
            <div>
                <Screen screen={screen} />
                {
                    numbers.map((number) => {
                        return (
                            <Button
                                onClick={operation === '' ? (() => this.handleType(number.toString())) : (() => this.handleTypeSecondNumber(number.toString()))}
                            >{number}</Button>
                        )
                    })
                }
                {
                    operations.map((operation) => {
                        return (
                            <Button
                                onClick={(() => this.handleAddOperation(operation))}
                            >{operation}</Button>
                        )
                    })
                }
                <Button onClick={screen === '' ? (() => this.handleType('.')) : (() => this.handleTypeSecondNumber('.'))}>.</Button>
                <Button onClick={(() => this.handleCalculate(operation))}>=</Button>
                <Button onClick={(() => this.clearFunction())}>C</Button>
                {operation}
            </div>
        );
    }
}

export default Calculator;