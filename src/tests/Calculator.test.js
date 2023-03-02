import { render, screen } from '@testing-library/react'
import  userEvent from '@testing-library/user-event'
import Calculator from '../components/Calculator'

describe("Counter", () => {
    test("deve renderizar corretamente os botoes dos dígitos de operações +, -, *, e /", () => {
        render(<Calculator />)

        const sumBtn = screen.getByRole('button', {
            name: /\+/i
        })
        const subtractionBtn = screen.getByRole('button', {
            name: /\-/i
        })
        const multiplyBtn = screen.getByRole('button', {
            name: /\*/i
        })
        const divisionBtn = screen.getByRole('button', {
            name: /\//i
        })

        expect(sumBtn).toBeInTheDocument()
        expect(subtractionBtn).toBeInTheDocument()
        expect(multiplyBtn).toBeInTheDocument()
        expect(divisionBtn).toBeInTheDocument()
    })

    test("deve renderizar o resultado correto da multiplicação entre 2 e 3 ", async() => {
        const user = userEvent.setup() 
        render(<Calculator/>)
        
        const twoBtn = screen.getByRole('button', {
            name: /2/i
        })
        const multiplyBtn = screen.getByRole('button', {
            name: /\*/i
        })
        const threeBtn = screen.getByRole('button', {
            name: /3/i
        })
        const equalBtn = screen.getByRole('button', {
            name: /=/i
        })
        
        await user.click(twoBtn)
        await user.click(multiplyBtn)
        await user.click(threeBtn)
        await user.click(equalBtn)
        
        expect(screen.getByTestId("result")).toHaveTextContent("6")
    })

    test("deve renderizar o resultado correto da concatenaçao operações", async () => {
        const user = userEvent.setup() 
        render(<Calculator/>)
      
        const twoBtn = screen.getByRole('button', {
            name: /2/i
        })
        const multiplyBtn = screen.getByRole('button', {
            name: /\*/i
        })
        const threeBtn = screen.getByRole('button', {
            name: /3/i
        })
        const sumBtn = screen.getByRole('button', {
            name: /\+/i
        })
        const fourBtn = screen.getByRole('button', {
            name: /4/i
        })
        const equalBtn = screen.getByRole('button', {
            name: /=/i
        })
        
        await user.click(twoBtn) 
        await user.click(multiplyBtn)
        await user.click(threeBtn)
        await user.click(sumBtn)
        await user.click(fourBtn)
        await user.click(equalBtn)
        
        expect(screen.getByTestId("result")).toHaveTextContent("10")
    })
})