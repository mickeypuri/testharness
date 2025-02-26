import promptSync from "prompt-sync";

const prompt = promptSync({sigint: true})

export const getInputUsingPrompt = (query: string) => {
  const input = prompt(query)
  return input;
}