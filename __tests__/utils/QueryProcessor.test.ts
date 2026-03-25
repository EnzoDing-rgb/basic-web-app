import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Rohan"
          ));
    })

    test('should return andrew id', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("fengde");
    })

    test('should return who am i', () => {
        const query = "Who am I?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("小🐷");
    })

    test('should return who are you', () => {
        const query = "Who are you?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("小🐷");
    })

    test('should return small manman', () => {
        const query = "小manman";
        const response: string = QueryProcessor(query);
        expect(response).toBe("小👶🏻👶🏻");
    })

    test('should return ding for enzo', () => {
        const query = "Enzo 返回 ding";
        const response: string = QueryProcessor(query);
        expect(response).toBe("ding");
    })
});