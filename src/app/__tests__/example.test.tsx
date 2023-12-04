import {expect, jest, test, describe} from '@jest/globals';
import { fetchData, testing } from '../chat/async';


describe('loading jest', ()=>{
    test('should return true',()=>{
        expect(testing).toBe(true)
    })
})

describe('fetchData function', () => {
  test('should return mocked data', async () => {
    interface MockedResponse {
      openai: {
        status: string;
        generated_text: string;
        message: {
          role: string;
          message: string;
        }[];
        cost: number;
      };
    }

    const mockedData: MockedResponse = {
      openai: {
        status: 'success',
        generated_text: "As an AI, I don't have feelings...",
        message: [
          {
            role: 'user',
            message: 'How are you?',
          },
          {
            role: 'assistant',
            message: "As an AI, I don't have feelings...",
          },
        ],
        cost: 0.000086,
      },
    };

    (global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
        json: async () => mockedData,
      } as never) as jest.Mock;

    const data = await fetchData();

    expect(data).toEqual(mockedData);

    (global.fetch as jest.Mock).mockRestore();
  });
});