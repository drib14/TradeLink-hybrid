export interface MessageItem {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
  createdAt: string;
  readAt: string | null;
}

export interface ConversationParticipant {
  id: string;
  displayName: string;
  profilePhoto: string | null;
}

export interface ConversationSummary {
  id: string;
  listingId: string;
  listingTitle: string;
  listingPrice: number;
  listingThumbnail: string | null;
  otherParticipant: ConversationParticipant;
  lastMessage: string | null;
  lastMessageAt: string | null;
  unreadCount: number;
}

export interface SendMessageRequest {
  body: string;
}

export interface CreateConversationRequest {
  listingId: string;
}
