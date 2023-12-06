import { render, screen, getByRole, fireEvent } from "@testing-library/react";
import { fetchData, ChatState } from "../chat/async";
import {
  expect,
  jest,
  test,
  describe,
  beforeAll,
  afterAll,
} from "@jest/globals";
import "@testing-library/jest-dom/jest-globals";

beforeAll(() => {
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
      status: "success",
      generated_text: "As an AI, I don't have feelings...",
      message: [
        {
          role: "user",
          message: "How are you?",
        },
        {
          role: "assistant",
          message: "As an AI, I don't have feelings...",
        },
      ],
      cost: 0.000086,
    },
  };

  (global.fetch as jest.Mock) = jest.fn().mockResolvedValue({
    json: async () => mockedData,
  } as never) as jest.Mock;
});

afterAll(() => {
  (global.fetch as jest.Mock).mockRestore();
});

describe("fetchData function", () => {
  test("should return mocked data", async () => {
    const data = await fetchData();
    expect(data).toEqual("As an AI, I don't have feelings...");
  });
});

describe("ChatState component", () => {
  test("should render openAI text", async () => {
    const { findByText } = render(<ChatState />);
    const testElement = await findByText("As an AI, I don't have feelings...");
    expect(testElement).toBeInTheDocument();
  });
  test("previous messages are displayed", async () => {
    const { findByText, findAllByText, getByRole } = render(<ChatState />);

    const input = getByRole("textbox");
    const submitButton = getByRole("button");

    fireEvent.change(input, { target: { value: "Hello, Jest!" } });
    fireEvent.click(submitButton);

    const oldEle = await findAllByText("As an AI, I don't have feelings...");
    const newEle = await findByText("Hello, Jest!");
    expect(oldEle.length > 1).toBeTruthy;
    expect(newEle).toBeInTheDocument();
  });
  test("data gets stored in localStorage", () => {
    localStorage.setItem("a", "a");
  });
});
