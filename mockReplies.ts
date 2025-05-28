export interface MockReply {
  keywords: string[];
  reply: string;
}

export const mockReplies: MockReply[] = [
  { keywords: ["안녕", "hello"], reply: "저도 반가워요!" },
  { keywords: ["고마워", "감사", "thanks"], reply: "천만에요!" },
  { keywords: ["이름"], reply: "저는 챗봇이에요." },
  { keywords: ["날씨"], reply: "오늘은 맑아요!" },
  { keywords: ["뭐해", "뭐해요"], reply: "함께 놀아요!" },
  { keywords: ["몇 살이야"], reply: "저는 나이를 측정할 수 없어요." },
  { keywords: ["고민"], reply: "저에게 말씀해 보세요." },
  { keywords: ["힘들어"], reply: "제가 위로해 드릴게요." },
  { keywords: ["하나님"], reply: "위대하신 분이에요!" },
];
