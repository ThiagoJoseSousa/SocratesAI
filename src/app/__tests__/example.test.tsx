import {render, screen} from '@testing-library/react'
import {expect, jest, test, describe, beforeAll, afterAll} from '@jest/globals';
import { fetchData, ChatState } from '../chat/async';
import '@testing-library/jest-dom/jest-globals'

beforeAll(()=>{
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
  
})

afterAll(()=>{
      (global.fetch as jest.Mock).mockRestore();
})

describe('fetchData function', () => {
  test('should return mocked data', async () => {
    const data = await fetchData();
  expect(data.openai.generated_text).toEqual("As an AI, I don't have feelings...");
  });
});

describe('ChatState component', ()=>{
  test('should render openAI text', async ()=>{
    const { findByText } = render(< ChatState />)
    const testElement= await findByText("As an AI, I don't have feelings...");
    expect(testElement).toBeInTheDocument();
  })
  test('previous messages are stored', async()=>{
    
  })
})