import ChatMessage from "./ChatMessage";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

type Props = {
  messages: Message[];
};

export default function ChatHistory({
  messages,
}: Props) {
  return (
    <div className="flex-1 overflow-auto">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}
    </div>
  );
}