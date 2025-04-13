import Quiz from "../../client/src/components/Quiz"
describe("Quiz", () => {
    beforeEach(() => {
        cy.intercept({
            method: 'GET',
            url: '/api/questions/random'
        }, {
            fixture: 'questions.json',
            statusCode: 200
        }) .as('getRandomQuestion')
    })
    it("Quiz", () => {
        cy.mount(<Quiz/>)
    })
    it("showsQuestions", () => {
        cy.mount(<Quiz/>)
        cy.get("button").contains("Start Quiz")
        cy.get("button").contains("Start Quiz").click()
    })
    it("completeQuiz", () => {
        cy.mount(<Quiz/>)
        cy.get("button").contains("Start Quiz")
        cy.get("button").contains("Start Quiz").click()
        cy.get("button").contains("1").click()
        cy.get('.alert').contains("Your score: 0/1")
    })
    it("restartQuiz", () => {
        cy.mount(<Quiz/>)
        cy.get("button").contains("Start Quiz")
        cy.get("button").contains("Start Quiz").click()
        cy.get("button").contains("1").click()
        cy.get('.alert').contains("Your score: 0/1")
        cy.get("button").contains("Take New Quiz").click()
        cy.get("button").contains("1").click()
    })
})