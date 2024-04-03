export type TChatQuery =
    | {
          role: 'assistant';
          content: string | null;
      }
    | {
          role: 'user';
          content: string;
      };
